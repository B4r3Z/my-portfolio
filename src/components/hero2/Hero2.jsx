import "./Hero2Style.css";

import React from "react";

export const HeroImg2 = ({ heading, text }) => {
  return (
    <div className="heroImg2">
      <div className="heading">
        <h1>{heading}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};
