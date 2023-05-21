//SPDX-License-Identifier: MIT
pragma solidity >0.5.0 <=0.9.0;

contract FundMe   {
    mapping(uint256 => Campaign) public campaigns;
    mapping(address => uint) public investors;
    uint256 public numberOfCampaigns = 0;
    address public manager;
    uint public minimum_Contribution;
    uint public no_of_donors;
    uint public numOfRequests;
    uint public no_of_investors;
    string public symbol;
    string public token_name;
    mapping(uint => Request) public request;
    mapping(address => uint) balanceOf;
    

    constructor()   {
        minimum_Contribution = 200 wei;
        manager = msg.sender;
        token_name="FundMe";
        symbol="fd";   
    }


    struct Campaign {
        address owner;
        string title;
        string description;
        uint256 target;
        uint256 deadline;
        uint256 amountCollected;
        string image;
        uint256 tokens;
        address[] donators; //track the recors of donors
        address[] investors;
        uint256[] donations;
    }

    struct Request {
        address payable recepient;
        uint value;
        bool completed;
        uint noOfVoters;
        mapping(address => bool) voters;
    }



    function createCampaign(
        address _owner,
        string memory _title,
        string memory _description,
        uint256 _target,
        uint256 _deadline,
        string memory _image,
        uint256 initialSupply
    ) public returns (uint256) {
        //creation of campaign
        Campaign storage campaign = campaigns[numberOfCampaigns];
        require(campaign.deadline < block.timestamp,  "The deadline should be a date in the future." );
        campaign.owner = _owner;
        campaign.title = _title;
        campaign.description = _description;
        campaign.target = _target;
        campaign.deadline = _deadline;
        campaign.amountCollected = 0;
        campaign.image = _image;
        campaign.tokens=initialSupply;
        balanceOf[msg.sender] = initialSupply; 
        // _mint(msg.sender, initialSupply); 
        numberOfCampaigns++;
        return numberOfCampaigns - 1;
    }
    //check project tokens allocated
    function Allocate_token(uint256 _id) public view returns(uint256){
        return(campaigns[_id].tokens);
    }
    function donateToCampaign(uint256 _id) public payable {
        //Donates to Campaign using input ID
        uint256 amount = msg.value;
        require( amount >= minimum_Contribution, "Please Donate Minimum Contribution");
        Campaign storage campaign = campaigns[_id];
        campaign.donators.push(msg.sender);
        no_of_donors++;
        campaign.donations.push(amount);
        uint256 commission=amount * 1 /100;
        (bool send, ) = payable(manager).call{value: commission}("");
        require(send,"Cutting 1 percent commision as a company interest");
        (bool sent, ) = payable(campaign.owner).call{value: amount}("");
        if (sent) {
            campaign.amountCollected = campaign.amountCollected + amount;
        }
    }

    function Invest_In_Campaign(uint256 _id) public payable {
        uint256 amount = msg.value;
        require( amount >= minimum_Contribution, "Please Donate Minimum Contribution" );
        Campaign storage campaign = campaigns[_id];
        campaign.investors.push(msg.sender);
        if (investors[msg.sender] == 0) {
            no_of_investors++;
        }
        investors[msg.sender] += amount;
        campaign.amountCollected = campaign.amountCollected + amount;
        transfer(msg.sender,campaign.tokens);
    }

    function getDonators(uint256 _id ) public view returns (address[] memory, uint256[] memory) {
        //Get Donator using input ID
        return (campaigns[_id].donators, campaigns[_id].donations);
    }

    function getInvestors(uint256 _id ) public view returns (address[] memory, uint256[] memory) {
        //Get Donator using input ID
        return (campaigns[_id].investors, campaigns[_id].donations);
    }

    function getCampaigns() public view returns (Campaign[] memory) {
        //Get all the campaigns
        Campaign[] memory allCampaigns = new Campaign[](numberOfCampaigns);
        for (uint i = 0; i < numberOfCampaigns; i++) {
            Campaign storage item = campaigns[i];

            allCampaigns[i] = item;
        }

        return allCampaigns;
    }

    function createRequest(uint _id, address payable _recipient, uint _value ) public {
        Campaign storage campaign = campaigns[_id];
        require(
            msg.sender == campaign.owner,
            "Only Campaign owner request for money"
        );
        Request storage newRequest = request[numOfRequests];
        numOfRequests++;
        newRequest.recepient = _recipient;
        newRequest.value = _value;
        newRequest.completed = false;
        newRequest.noOfVoters = 0;
    }

    function voteRequest(uint _reqNum) public {
        require(investors[msg.sender] > 0, "Must be a investor");
        Request storage thisRequest = request[_reqNum];
        require(thisRequest.voters[msg.sender] == false, "You have Already Voted" );
        thisRequest.voters[msg.sender] = true;
        thisRequest.noOfVoters++;
    }

    function makePayment(uint _reqNum, uint _id) public payable  {
        Campaign storage campaign = campaigns[_id];
        require(msg.sender == campaign.owner, "Only Campaign owner request for money");
        require(campaign.amountCollected <= campaign.target);
        Request storage thisRequest = request[_reqNum];
        require(thisRequest.completed == false, "The Request haas been completed" );
        require(thisRequest.noOfVoters >= no_of_investors / 2, "Majority Does not support" );
        uint256 commission=thisRequest.value * 1 /100;
        (bool send, ) = payable(manager).call{value: commission}("");
        require(send,"Cutting 1 percent commision as a company profit");
        thisRequest.recepient.transfer(thisRequest.value);
        thisRequest.completed = true;
    }

        function transfer(address _to, uint256 _value) public {
        require(balanceOf[msg.sender] >= _value);           // Check if the sender has enough
        require(balanceOf[_to] + _value >= balanceOf[_to]); // Check for overflows
        balanceOf[msg.sender] -= _value;                    // Subtract from the sender
        balanceOf[_to] += _value;                           // Add the same to the recipient
    }



}
