import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../cssfiles/responsivefront.css";
import { lo } from "../assets";
import jQuery from "jquery";
import ScrollToTop from "react-scroll-to-top";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Navbar = () => {
  const [active, Setactive] = useState("Home");
  const [anchorEl, setAnchorEl] = React.useState(null);
  jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() >= 10) {
      jQuery("#home").addClass("fixed-header ");
    } else {
      jQuery("#home").removeClass("fixed-header");
    }
  });

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const route = window.location.pathname;

  return (
    <>
      <ScrollToTop smooth id="arrow"></ScrollToTop>
      <header id="home">
        <div className="">
          <div className="top-bar" style={{ marginTop: "-11px" }}>
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
                  to="/investing"
                  className={route === "/investing" ? "active" : "none"}
                  onClick={() => Setactive("investing")}
                >
                  Start Investing
                </Link>

                <Link
                  to="/login"
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
                    className={route === "/login" ? "active" : "none"}
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
                    <Link to="/">Donor</Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link to="/">Investor</Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link to="/Create-Campaign">Campaign Creator</Link>
                  </MenuItem>
                </Menu>
              </div>
              <div className="clear"></div>
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
              >
                Connect Wallet
              </button>
            </div>
            <div className="clear"></div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
