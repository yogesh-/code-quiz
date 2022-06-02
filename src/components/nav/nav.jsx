import React from "react";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./nav.css";
import IconButton from "@mui/material/IconButton";
import { MaterialUISwitch } from "../darkmodebtn/darkmodebtn";
import { useTheme } from "../../context/theme/themecontext";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { darkSwitch } = useTheme();
  const [hamburger, setHamburger] = useState(false);
  return (
    <>
      <header>
        <div className="nav">
          <Link to={"/"}>
            <img
              id="logo"
              src={require("../../assets/main-logo.png")}
              alt="logo"
            ></img>
          </Link>
          <div className="desktop-nav">
            <button className="login margin-nav-items">Login</button>
            <IconButton sx={{ fontSize: 80 }} onClick={darkSwitch}>
              <MaterialUISwitch />
            </IconButton>
          </div>

          {/* Mobile Navigation */}
          <div className="h-icon">
            {hamburger ? (
              <CloseIcon onClick={() => setHamburger(!hamburger)} />
            ) : (
              <MenuIcon onClick={() => setHamburger(!hamburger)} />
            )}
          </div>

          {hamburger ? (
            <div className="mob-nav">
              <a href="github.com/yogesh-">Login</a>
              <IconButton sx={{ fontSize: 20 }} onClick={darkSwitch}>
                <MaterialUISwitch />
              </IconButton>
            </div>
          ) : (
            ""
          )}
        </div>
      </header>
    </>
  );
};
