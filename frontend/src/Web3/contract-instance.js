import { ethers } from "ethers";
import Web3Modal from "web3modal";
import contratAbi from "../contract-abi/contratAbi.json";
// getting contract abi and address

const fetchContract = async (signerorprovider) => {
  // const data = await JSON.parse(contratAbi);

  const instance = new ethers.Contract(
    contratAbi.address,
    contratAbi.abi,
    signerorprovider
  );
  return instance;
};

const getProviderOrSigner = async (needSigner = false) => {
  // Connect to Metamask
  // Since we store `web3Modal` as a reference, we need to access the `current` value to get access to the underlying object
  const web3modal = new Web3Modal();

  const connection = await web3modal.connect();
  const provider = new ethers.providers.Web3Provider(connection);

  // // If user is not connected to the Goerli network, let them know and throw an error
  // const { chainId } = await web3Provider.getNetwork();
  // if (chainId !== 5) {
  //   window.alert('Change the network to Goerli');
  //   throw new Error('Change network to Goerli');
  // }
  if (needSigner) {
    const signer = provider.getSigner();
    console.log("got signer", signer);
    const instance = fetchContract(signer);
    return instance;
  }
  const instance = fetchContract(provider);
  console.log("got provider", instance);
  return instance;
};

export default getProviderOrSigner;
