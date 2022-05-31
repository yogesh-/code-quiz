import React from "react";
import "./home.css";
// import { logo } from "../assets/site-logo.svg";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export const Home = () => {
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
            <button className="margin-nav-items">Toggle</button>
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
