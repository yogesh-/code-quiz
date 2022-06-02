import React from "react";
import { Navbar } from "../../components/nav/nav";
import "./option.css";
import htmlIcon from "../../assets/html.png";
import cssIcon from "../../assets/css.png";
import jsIcon from "../../assets/js.png";
import { Link } from "react-router-dom";

export const Option = () => {
  return (
    <>
      <Navbar />
      <div className="option-main-content">
        <div className="lang-options">
          <div>
            <p>Select an option to start quiz</p>
          </div>
          <div className="hover-option">
            <Link to={"/html-quiz"}>
              <img src={htmlIcon} alt="html"></img>
            </Link>
            <Link to={"/css-quiz"}>
              <img src={cssIcon} alt="css"></img>
            </Link>
            <Link to={"/js-quiz"}>
              <img src={jsIcon} alt="javascript"></img>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
