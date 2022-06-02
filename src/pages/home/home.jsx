import React from "react";
import "./home.css";
import { Navbar } from "../../components/nav/nav";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <Navbar />
      <div className="content">
        <h1>Test your skills in</h1>
        <div className="spin-content">
          <span id="spin"></span>
        </div>
        {/* <Link to="/about">About</Link>
to: string */}
        <Link to="/option">
          <button Link="/option">Start Now</button>
        </Link>
      </div>
    </>
  );
};
