import { toast } from "react-toastify";

import getProviderOrSigner from "./contract-instance";
// creating the function for the minting the NFT / creating the NFT
// eslint-disable-next-line consistent-return
export const addCampaign = async (name, title, des, target, deadline, img) => {
  try {
    console.log("wallet", name);
    console.log("fname ", title);
    console.log("lname", des);
    console.log("dob  ", target);
    console.log("contact", deadline);
    console.log("age", img);
    const mintInstance = await getProviderOrSigner(true);
    console.log("mintInstance", mintInstance);
    // address _owner,
    // string memory _title,
    // string memory _description,
    // uint256 _target,
    // uint256 _deadline,
    // string memory _image,
    // uint256 initialSupply
    const trans = await mintInstance.createCampaign(
      "0x31Cbc098Fd5629e5caBB68471B47F718582BA039",
      title,
      des,
      target,
      23435,
      "img",
      22
    );

    await trans.wait();
    // eslint-disable-next-line no-undef
    toast.error("Employee Add successfully");
  } catch (error) {
    console.log("Something went wrong to intetract with smart contract");
  }
};

// export const ViewAllEmployee = async () => {
//   try {
//     console.log("idhr a raha ?");
//     const mintInstance = await getProviderOrSigner();
//     console.log("provider", mintInstance);

//     const trans = await mintInstance.GetAllEmployees();
//     console.log("trans", trans);
//     // setEmployeeData(trans);
//     return trans;
//   } catch (error) {
//     console.log("Something went wrong to intetract with smart contract");
//   }
// };

// export const ViewEmployee = async (employee, setEmployeeData) => {
//   try {
//     console.log("idhr a raha ?");
//     const mintInstance = await getProviderOrSigner();
//     console.log("provider", mintInstance);

//     const trans = await mintInstance.GetEmployee(employee);
//     console.log("trans", trans);
//     setEmployeeData(trans);
//   } catch (error) {
//     console.log("Something went wrong to intetract with smart contract");
//   }
// };

// export const addReward = async (title, points, difficulty, critaria) => {
//   try {
//     const mintInstance = await getProviderOrSigner(true);
//     console.log("mintInstance", mintInstance);
//     // address wallet;
//     // string fname;
//     // string lname;
//     // string dob;

//     const trans = await mintInstance.AddReward(
//       title,
//       points,
//       difficulty,
//       critaria
//     );

//     await trans.wait();
//     // eslint-disable-next-line no-undef
//     toast("Reward Add successfully");
//   } catch (error) {
//     console.log("Something went wrong to intetract with smart contract");
//   }
// };

// export const ViewAllReward = async () => {
//   try {
//     console.log("idhr a raha ?");
//     const mintInstance = await getProviderOrSigner();
//     console.log("provider", mintInstance);

//     const trans = await mintInstance.GetAllReward();
//     console.log("trans", trans);
//     return trans;
//   } catch (error) {
//     console.log("Something went wrong to intetract with smart contract");
//   }
// };

// export const ViewGetReward = async (employee, setEmployeeData) => {
//   try {
//     const mintInstance = await getProviderOrSigner();
//     console.log("mintInstance", mintInstance);

//     const trans = await mintInstance.GetReward(employee);
//     console.log("trans", trans);
//     setEmployeeData(trans);
//   } catch (error) {
//     console.log("Something went wrong to intetract with smart contract");
//   }
// };

// export const AddAssignReward = async (
//   title,
//   points,
//   difficulty,
//   critaria,
//   empAddress
// ) => {
//   try {
//     console.log("title", title);
//     console.log("points ", points);
//     console.log("difficulty", difficulty);
//     console.log("empAddress  ", empAddress);
//     const mintInstance = await getProviderOrSigner(true);
//     console.log("mintInstance", mintInstance);
//     // string memory _title,
//     // uint8 _point,
//     // uint8 _difficulty,
//     // string memory _criteria,
//     // address _employeeWallet

//     const trans = await mintInstance.AssignReward(
//       title,
//       points,
//       difficulty,
//       critaria,
//       empAddress
//     );

//     await trans.wait();
//     // eslint-disable-next-line no-undef
//     toast("Reward Add successfully");
//   } catch (error) {
//     console.log("Something went wrong to intetract with smart contract");
//   }
// };

// export const GiveEmpReward = async (wallet, rewardid) => {
//   try {
//     console.log("wallet", wallet);
//     console.log("rewardid ", rewardid);

//     const mintInstance = await getProviderOrSigner(true);
//     console.log("mintInstance", mintInstance);
//     //address _employeeWallet,
//     // uint8 _rewardid

//     const trans = await mintInstance.GiveReward(wallet, rewardid);

//     await trans.wait();
//     // eslint-disable-next-line no-undef
//     toast("Reward Add successfully");
//   } catch (error) {
//     console.log("Something went wrong to intetract with smart contract");
//   }
// };

// export const ViewAllAssignReward = async (wallet) => {
//   try {
//     const mintInstance = await getProviderOrSigner();
//     console.log("mintInstance", mintInstance);
//     console.log("wallet", wallet);
//     const trans = await mintInstance.GetAllAssignedRewards(wallet);
//     console.log("trans", trans);
//     return trans;
//   } catch (error) {
//     console.log("Something went wrong to intetract with smart contract");
//   }
// };

// export const ViewAllGivenReward = async (wallet) => {
//   try {
//     const mintInstance = await getProviderOrSigner();
//     console.log("mintInstance", mintInstance);
//     console.log("wallet", wallet);
//     const trans = await mintInstance.GetGivenRewards(wallet);
//     console.log("trans", trans);
//     return trans;
//   } catch (error) {
//     console.log("Something went wrong to intetract with smart contract");
//   }
// };

// export const UpdateEmployeeData = async (
//   wallet,
//   fname,
//   lname,
//   dob,
//   contact,
//   age,
//   address,
//   position
// ) => {
//   try {
//     console.log("wallet", wallet);
//     console.log("fname ", fname);
//     console.log("lname  ", lname);
//     console.log("dob ", dob);
//     console.log("contact ", contact);
//     console.log("age ", age);
//     console.log("address", address);
//     console.log("position", position);

//     const mintInstance = await getProviderOrSigner(true);
//     console.log("mintInstance", mintInstance);
//     //address _wallet,
//     // string memory _fname,
//     // string memory _lname,
//     // string memory _dob,
//     // string memory contact,
//     // uint8 _age,
//     // string memory _address,
//     // string memory _position

//     const trans = await mintInstance.UpdateEmployee(
//       wallet,
//       fname,
//       lname,
//       dob,
//       contact,
//       age,
//       address,
//       position
//     );

//     await trans.wait();
//     // eslint-disable-next-line no-undef
//     toast("Reward Add successfully");
//   } catch (error) {
//     console.log("Something went wrong to intetract with smart contract");
//   }
// };

// export const UpdateRewardData = async (
//   id,
//   title,
//   point,
//   difficulty,
//   criteria
// ) => {
//   try {
//     const mintInstance = await getProviderOrSigner(true);
//     console.log("mintInstance", mintInstance);
//     console.log("id", id);
//     console.log("title", title);
//     console.log("point", point);
//     console.log("difficulty", difficulty);
//     console.log("criteria", criteria);
//     // uint256 _id,
//     //     string memory _title,
//     //     uint8 _point,
//     //     uint8 _difficulty,
//     //     string memory _criteria
//     const trans = await mintInstance.UpdateReward(
//       id,
//       title,
//       point,
//       difficulty,
//       criteria
//     );

//     await trans.wait();
//     // eslint-disable-next-line no-undef
//     toast("Reward Add successfully");
//   } catch (error) {
//     console.log("Something went wrong to intetract with smart contract");
//   }
// };

// export const DeleteEmployeeData = async (wallet) => {
//   try {
//     console.log("wallet", wallet);

//     const mintInstance = await getProviderOrSigner(true);
//     console.log("mintInstance", mintInstance);
//     //address _employeeWallet,
//     // uint8 _rewardid

//     const trans = await mintInstance.DeleteEmployee(wallet);

//     await trans.wait();
//     // eslint-disable-next-line no-undef
//     toast("Delete Employee successfully");
//   } catch (error) {
//     console.log("Something went wrong to intetract with smart contract");
//   }
// };

// export const DeleteRewardData = async (rewardid) => {
//   try {
//     console.log("wallet", rewardid);

//     const mintInstance = await getProviderOrSigner(true);
//     console.log("mintInstance", mintInstance);
//     //address _employeeWallet,
//     // uint8 _rewardid

//     const trans = await mintInstance.DeleteReward(rewardid);

//     await trans.wait();
//     // eslint-disable-next-line no-undef
//     toast("Delete Employee successfully");
//   } catch (error) {
//     console.log("Something went wrong to intetract with smart contract");
//   }
// };

// export const GetRewardPoints = async (empAddress) => {
//   try {
//     console.log("reward wallet", empAddress);

//     const mintInstance = await getProviderOrSigner(true);
//     console.log("mintInstance", mintInstance);

//     const trans = await mintInstance.GetTotalPoint(empAddress);

//     // eslint-disable-next-line no-undef
//     toast("Delete Employee successfully");
//     return trans;
//   } catch (error) {
//     console.log("Something went wrong to intetract with smart contract");
//   }
// };
