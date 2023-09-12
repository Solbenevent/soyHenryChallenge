import React from "react";
import { FcSurvey } from "react-icons/fc";
import "../components/Styles/NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid justify-content-center custom-navbar">
        {" "}
        <a className="navbar-brand" href="#">
          <FcSurvey size={40} /> SURVEY
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
