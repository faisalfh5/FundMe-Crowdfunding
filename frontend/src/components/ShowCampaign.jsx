import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { Sidebar } from "../components/index";
import "../../src/App.css";
import { getCampaign } from "../Web3/contractFunction";

const ShowCampaign = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [TxData, setTxData] = useState("");

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
      return;
    };

    fetch();
  }, [walletAddress.length !== 0]);

  useEffect(() => {
    const fetchData = async () => {
      console.log("here");
      return await getCampaign(walletAddress, setTxData);
    };

    fetchData();
  }, [walletAddress.length !== 0]);

  console.log("txData", TxData);
  console.log("Wallet Address", walletAddress);

  return (
    <div className="relative sm:-8 p-4  min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>
      {/* {TxData?.map((item, index) => {
        return (
          <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
            <div className="main-content">
              <h1 className="content">{item.title}</h1>
            </div>
            <div className="descriptions">
              <p>{item.description}</p>
            </div>
            <div className="images">
              <img src="https://images.unsplash.com/photo-1682687220063-4742bd7fd538?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=775&q=80" />
            </div>

            <div className="side">
              <h1>US$ 8,863</h1>
            </div>
            <p style={{ marginLeft: "53%" }}>pledged of US$ 500 goal</p>

            <h1
              style={{
                marginLeft: "53%",
                marginTop: "3%",
                fontSize: "25px",
                fontWeight: "bold",
              }}
            >
              125
            </h1>

            <p style={{ marginLeft: "53%" }}>backers</p>
            <h1
              style={{
                marginLeft: "53%",
                marginTop: "3%",
                fontSize: "25px",
                fontWeight: "bold",
              }}
            >
              29
            </h1>

            <p style={{ marginLeft: "53%" }}>days to go</p>
            <button
              style={{
                marginLeft: "53%",
                marginTop: "3%",
                background: "rgb(15, 122, 90)",
                padding: "1%",
                width: "30%",
                color: "white",
              }}
            >
              Back this project
            </button>
          </div>
        );
      })} */}
    </div>
  );
};

export default ShowCampaign;
