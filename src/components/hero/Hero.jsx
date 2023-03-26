import React from "react";
import "./HeroStyle.css";
import intro from "../../assets/best-laptop-medium.jpg";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="heroImg" src={intro} alt="Laptops" />
      </div>
      <div className="content">
        <p>helolo</p>
        <h1>Barez</h1>
        <div>
          <Link to="/projects" className="btn">
            projects
          </Link>
          <Link to="/contact" className="btn secondary">
            contact
          </Link>
        </div>
      </div>
    </div>
  );
};
