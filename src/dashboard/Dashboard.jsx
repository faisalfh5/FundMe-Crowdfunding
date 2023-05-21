import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sidebar, Navbar_dash } from "../components/index";
import Createcampaign from "../components/Createcampaign";

const Dashboard = () => {
  return (
    <div className="relative sm:-8 p-4  min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>
      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar_dash />
        <Createcampaign />
      </div>
    </div>
  );
};

export default Dashboard;
