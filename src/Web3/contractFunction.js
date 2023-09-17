import { toast } from "react-toastify";

import getProviderOrSigner from "./contract-instance";
// creating the function for the minting the NFT / creating the NFT
// eslint-disable-next-line consistent-return
export const addCampaign = async (
  WalletAddress,
  name,
  title,
  des,
  target,
  deadline,
  img
) => {
  try {
    target = target * 10000000;
    console.log("name", name);
    console.log("title ", title);
    console.log("des", des);
    console.log("target  ", target);
    console.log("deadline", deadline);
    console.log("img", img);
    const mintInstance = await getProviderOrSigner(true);
    console.log("mintInstance this", mintInstance);

    // address _owner,
    // string memory _title,
    // string memory _description,
    // uint256 _target,
    // uint256 _deadline,
    // string memory _image,
    // uint256 initialSupply
    const trans = await mintInstance.createCampaign(
      WalletAddress,
      title,
      des,
      target,
      deadline,
      img
    );

    await trans.wait();
    // eslint-disable-next-line no-undef
    toast.error("Employee Add successfully");
  } catch (error) {
    console.log("Something went wrong to intetract with smart contract");
  }
};

export const getCampaign = async (walletAddress, setTxData) => {
  try {
    const mintInstance = await getProviderOrSigner();
    console.log("fn provider", mintInstance);

    const trans = await mintInstance.getUserCampaigns(walletAddress);
    console.log("Fn trans", trans);
    // setEmployeeData(trans);
    setTxData(trans);
  } catch (error) {
    console.log("Something went wrong to intetract with smart contract");
  }
};

export const getallCampaign = async () => {
  try {
    const mintInstance = await getProviderOrSigner();
    console.log("provider", mintInstance);

    const trans = await mintInstance.getCampaigns();
    console.log("Fn trans", trans);
    return trans;
  } catch (error) {
    console.log("Something went wrong to intetract with smart contract");
  }
};
