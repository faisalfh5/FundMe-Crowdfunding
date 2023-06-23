import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { Link } from "react-router-dom";
import "../App.css";
import "../cssfiles/responsivefront.css";
import "../cssfiles/nav.css";
import { lo } from "../assets";
import jQuery from "jquery";
import ScrollToTop from "react-scroll-to-top";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import metaMask from "./connectors/metaMask";

const Navbar = () => {
  const [active, Setactive] = useState("Home");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [walletAddress, setWalletAddress] = useState("");
  const [connect, setConnect] = useState(false);

  const scroll = () => {
    if (
      route === "/projects" ||
      route === "/login" ||
      jQuery(window).scrollTop() >= 10
    ) {
      jQuery("#home").addClass("fixed-header");
    } else {
      jQuery("#home").removeClass("fixed-header");
    }
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlesubmit = async () => {
    await metaMask(setWalletAddress);
    console.log("metmask return", walletAddress);
    // setWalletAddress(addr);
    setConnect(true);
  };

  const route = window.location.pathname;

  console.log("nav rount", route);
  async function getAddress() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const addr = await signer.getAddress();
    setWalletAddress(addr);
    if (addr) {
      setConnect(true);
    }
  }
  useEffect(() => {
    // const val = window.ethereum.isConnected();
    // if (val) {
    console.log("here");
    getAddress();
    scroll();
    // }
  });

  return (
    <>
      <header id="home">
        <div className="nav-col">
          <div className="logo">
            <img src={lo} alt="my_logo" />
          </div>
          <div className="menu">
            <Link
              to="/"
              className={active === "Home" ? "active" : ""}
              onClick={() => Setactive("Home")}
            >
              Home
            </Link>

            <Link
              to="/projects"
              className={route === "/projects" ? "active" : "none"}
              onClick={() => Setactive("projects")}
            >
              Projects
            </Link>

            <Link
              to="/login"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={70}
              duration={100}
              className={route === "/login" ? "active" : "none"}
              onClick={() => Setactive("login")}
            >
              Login
            </Link>

            <Button
              style={{ backgroundColor: "transparent" }}
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <Link
                className={route === "/Dashboard" ? "active" : "none"}
                onClick={() => Setactive("login")}
              >
                Dashboard
              </Link>
            </Button>
            <Menu
              id="basic-menu"
              disableFocusRipple={true}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>
                <Link to="/Create-Campaign">Campaign Creator</Link>
              </MenuItem>
            </Menu>
          </div>

          <div className="cnt-info-col">
            <button
              style={{
                display: "block",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                textAlign: "left",
                width: "150px",
              }}
              onClick={handlesubmit}
            >
              {connect === true
                ? walletAddress.substring(0, 11) + "..."
                : "Connect Wallet"}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
