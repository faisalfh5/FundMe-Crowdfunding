import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { sun, dash_logo } from "../assets";
import { navlink } from "./constant";
const Icon = ({ styles, name, imgUrl, IsActive, disabled, handleClick }) => (
  <div
    className={`w-[48px] h-[48px] rounded-[10px] ${
      IsActive && IsActive === name && "bg-[#2c2f32]"
    } flex justify-center items-center ${
      !disabled && "cursor-pointer"
    } ${styles}`}
    onClick={handleClick}
  >
    {!IsActive ? (
      <img src={imgUrl} alt="fund_logo" className="w-1/2 h-1/2" />
    ) : (
      <img
        src={imgUrl}
        alt="fund_logo"
        className={`w-1/2 h-1/2 ${IsActive !== name && "grayscale"}`}
      />
    )}
  </div>
);
const Sidebar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("dashboard");

  return (
    <div className="flex justify-between items-center flex-col   sticky top-5 h-[92vh]">
      <Link to="/">
        <Icon styles="w-[59px]   h-[52px]  bg-[#f3f3f8]" imgUrl={dash_logo} />
      </Link>

      <div className="flex-1 flex flex-col justify-between items-center bg-[#f3f3f8] rounded-[20px] w-[76px] py-4 mt-12">
        <div className="flex flex-col justify-center items-center gap-3">
          {navlink.map((link) => (
            <Icon
              key={link.name}
              {...link}
              isActive={isActive}
              handleClick={() => {
                if (!link.disabled) {
                  setIsActive(link.name);
                  navigate(link.link);
                }
              }}
            />
          ))}
        </div>

        <Icon styles="bg-[#3B3456] shadow-secondary" imgUrl={sun} />
      </div>
    </div>
  );
};

export default Sidebar;
