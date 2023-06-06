import detectEthereumProvider from "@metamask/detect-provider";
import { toast } from "react-toastify";

const metaMask = async () => {
  const provider = await detectEthereumProvider();
  // let addr;
  if (provider !== window.ethereum) {
    toast("Do you have multiple wallets installed?");
  }

  if (window.ethereum) {
    // Do something
    toast("wallet ethereum?");
  } else {
    console.log("wallet install?");
    console.warn("install metamask extension!!");
  }

  window.ethereum.request({ method: "eth_requestAccounts" }).then((res) => {
    // Return the address of the wallet
    // setWalletAddress(res);
    console.log(res);
  });
};

export default metaMask;
