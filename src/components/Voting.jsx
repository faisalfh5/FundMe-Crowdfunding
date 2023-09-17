import React from "react";
import { Sidebar, Navbar_dash } from "../components/index";
import Exploreproject from "../components/Exploreprojects";

const Voting = () => {
  return (
    <>
      <div className="relative sm:-8 p-4  min-h-screen flex flex-row ">
        <div className="sm:flex hidden mr-10 relative">
          <Sidebar />
        </div>
        <div className="flex-1 max-sm:w-full max-w-[1200px] mx-auto sm:pr-5">
          <Navbar_dash />
          <Exploreproject />
        </div>
      </div>
    </>
  );
};

export default Voting;
