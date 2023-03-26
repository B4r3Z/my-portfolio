import "./AboutContentStyle.css";

import React from "react";
import { Link } from "react-router-dom";

export const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Why Me?</h1>
        <p>I know how to tap keyboard</p>
        <Link to="/contact">
          <button className="btn">Contact Me</button>
        </Link>
      </div>
      <div className="right">
        <img
          src="https://www.iss.nus.edu.sg/images/default-source/default-album/software-dev.jpg?Status=Master&sfvrsn=aa8aa05f_0"
          alt=""
        />
      </div>
    </div>
  );
};
