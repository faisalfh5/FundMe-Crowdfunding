import React, { useState } from "react";
import CustomButton from "./CustomButton";
import { Link, useNavigate } from "react-router-dom";
import { DP, search, dash_logo, menu } from "../assets";
import { navlink } from "./constant";
const Navbar_dash = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("dashboard");
  const [address, setAddress] = useState(true);
  const [toggleDrawer, setToggleDrawer] = useState(false);
  // const { connect, address } = useStateContext();
  return (
    <div className="flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6">
      <div className="lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[#f3f3f8]  rounded-[100px]">
        <input
          type="text"
          placeholder="Search for campaigns"
          className="flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#3B3456] text-white bg-transparent outline-none"
        />

        <div className="w-[72px] h-full rounded-[20px] bg-[#3B3456] flex justify-center items-center cursor-pointer">
          <img
            src={search}
            alt="search"
            className="w-[15px] h-[15px] object-contain"
          />
        </div>
      </div>
      <div className="sm:flex hidden flex-row justify-end gap-4">
        <CustomButton
          btnType="button"
          //   title={address ? 'Create a campaign' : 'Connect'}
          //   styles={address ? 'bg-[#1dc071]' : 'bg-[#8c6dfd]'}
          title={address ? "Create a campaign" : "Connect"}
          styles={address ? "bg-[#3B3456]" : "bg-[#8c6dfd]"}
          //   handleClick={() => {
          //     if(address) navigate('create-campaign')
          //     else connect()
          // setAddress(!address);
          //   }
          // }
        />
        <Link to="/profile">
          <div className="w-[52px] h-[52px] rounded-full border-2 border-[#3B3456] bg-[#f3f3f8] flex justify-center items-center cursor-pointer">
            <img
              src={DP}
              alt="user"
              className="w-[60%] h-[60%] object-contain  "
            />
          </div>
        </Link>
      </div>
      {/* Small screen navigation */}
      <div className="sm:hidden flex justify-between items-center relative">
        <div className="w-[40px] h-[40px] rounded-[10px] bg-[#f3f3f8] flex justify-center items-center cursor-pointer">
          <img
            src={dash_logo}
            alt="user"
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
        <img
          src={menu}
          alt="menu"
          className="w-[34px] h-[34px] object-contain cursor-pointer"
          onClick={() => setToggleDrawer((prev) => !prev)}
        />
        <div
          className={`absolute top-[60px] right-0 left-0 bg-[#f3f3f8] z-10 shadow-secondary py-4 ${
            !toggleDrawer ? "-translate-y-[100vh]" : "translate-y-0"
          } transition-all duration-700`}
        >
          <ul className="mb-4">
            {navlink.map((link) => (
              <li
                key={link.name}
                className={`flex p-4 ${
                  isActive === link.name && "bg-[#f3f3f8]"
                }`}
                onClick={() => {
                  setIsActive(link.name);
                  setToggleDrawer(false);
                  navigate(link.link);
                }}
              >
                <img
                  src={link.imgUrl}
                  alt={link.name}
                  className={`w-[24px] h-[24px] object-contain ${
                    isActive === link.name ? "grayscale-0" : "grayscale"
                  }`}
                />
                <p
                  className={`ml-[20px] font-epilogue font-semibold text-[14px] ${
                    isActive === link.name ? "text-[#3B3456]" : "text-[#808191]"
                  }`}
                >
                  {link.name}
                </p>
              </li>
            ))}
          </ul>

         
        </div>
      </div>
    </div>
  );
};

export default Navbar_dash;
//bg-[#f3f3f8]  #3B3456
