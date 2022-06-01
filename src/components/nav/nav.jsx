import React from "react";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./nav.css";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
// import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import { useTheme } from "../../context/theme/themecontext";

export const Navbar = () => {
  const { dark, darkSwitch } = useTheme();
  const [hamburger, setHamburger] = useState(false);
  return (
    <>
      <header>
        <div className="nav">
          <img
            id="logo"
            src={require("../../assets/main-logo.png")}
            alt="logo"
          ></img>
          <div className="desktop-nav">
            <button className="login margin-nav-items">Login</button>
            <IconButton onClick={darkSwitch}>
              {dark ? <Brightness7Icon /> : <Brightness4Icon />}
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
              <a href="github.com/yogesh-">Toggle</a>
            </div>
          ) : (
            ""
          )}
        </div>
      </header>
    </>
  );
};
