import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
// import { useStateContext } from "../context/index";
import { money } from "../assets";
import CustomButton from "../dashboard/CustomButton";
import FormField from "../components/FormField";
import { addCampaign } from "../Web3/contractFunction";
import uploadFilesToPinata from "../Web3/pinata";

const Createcampaign = () => {
  // const navigate = useNavigate();
  const [allData, setAllData] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [Condition, setCondition] = useState(false);

  //  const {createCampaign} = useStateContext();
  const [form, setForm] = useState({
    name: "",
    title: "",
    description: "",
    target: "",
    deadline: "",
  });

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };
  const handlePinata = async (e) => {
    // console.log("file", e.target.value);
    setCondition(true);
    await uploadFilesToPinata(e.target.files[0], setAllData);
    setCondition(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setCondition(true);

    await addCampaign(
      walletAddress,
      form.name,
      form.title,
      form.description,
      form.target,
      form.deadline,
      allData
    );
    setCondition(false);
  };

  async function getAddress() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const addr = await signer.getAddress();
    setWalletAddress(addr);
  }
  useEffect(() => {
    const fetch = async () => {
      console.log("here");
      await getAddress();
    };

    fetch();
  }, [walletAddress.length]);
  console.log("wallet address", form);

  return (
    <>
      <div class={Condition ? "opacity-20" : ""}>
        <div>
          <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px] ">
            <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">
              Start a Campaign
            </h1>
          </div>

          <form className="w-full mt-[65px] flex flex-col gap-[30px]">
            <div className="flex flex-wrap gap-[40px]">
              <FormField
                LableName="Your Name *"
                value={form.name}
                placeholder="Enter your name"
                inputType="text"
                handleChange={(e) => handleFormFieldChange("name", e)}
              />

              <FormField
                LableName="Campaign TItle *"
                placeholder="Write a title "
                inputType="text"
                value={form.title}
                handleChange={(e) => handleFormFieldChange("title", e)}
              />
            </div>

            <FormField
              LableName="Story *"
              placeholder="Write your story"
              isTextArea
              value={form.description}
              handleChange={(e) => handleFormFieldChange("description", e)}
            />
            <div className="w-full flex justify-start items-center p-4 bg-[#8c6dfd] h-[120px] rounded-[10px]">
              <img
                src={money}
                alt="money"
                className="w-[40px] h-[40px] object contain"
              />
              <h4 className="font-epilogue font-bold text-[25p] text-white ml-[20px]">
                You will get 100% of the raised amount
              </h4>
            </div>

            <div className="flex flex-wrap gap-[40px]">
              <FormField
                LableName="Goal *"
                placeholder="ETH 0.50"
                inputType="text"
                value={form.target}
                handleChange={(e) => handleFormFieldChange("target", e)}
              />
              <FormField
                LableName="End Date *"
                placeholder="End Date "
                inputType="date"
                value={form.deadline}
                handleChange={(e) => handleFormFieldChange("deadline", e)}
              />
              <div>
                <br />
                <br />

                <label for="profile_pic">Choose file to upload &nbsp;</label>
                <input
                  type="file"
                  id="profile_pic"
                  name="profile_pic"
                  accept=".jpg, .jpeg, .png"
                  onChange={handlePinata}
                />
              </div>

              <div
                className="flex justify-center items-center mt-[40px]"
                // style={}
                onClick={handleSubmit}
              >
                <CustomButton
                  btnType="submit"
                  title="Submit new campaign"
                  styles="bg-[#1dc071]"
                />
              </div>
            </div>
          </form>
        </div>
        {Condition ? (
          <div
            role="status"
            class="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2"
          >
            <svg
              aria-hidden="true"
              class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
        ) : (
          ""
        )}
      </div>

      {/* <div style={{width:"90%", marginTop:"-550px" , marginLeft:"120px",marginBottom:"50px"}}> */}

      {/* </div> */}
    </>
  );
};
export default Createcampaign;
