import React from "react";
import { FcSurvey } from "react-icons/fc";
import "../components/NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid justify-content-center custom-navbar">
        {" "}
        {/* Añade la clase 'justify-content-center' para centrar el contenido */}
        <a className="navbar-brand" href="#">
          <FcSurvey size={40} /> SURVEY
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
