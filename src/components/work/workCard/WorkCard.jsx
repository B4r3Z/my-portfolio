import "./WorkCardStyle.css";

import React from "react";
import { NavLink } from "react-router-dom";

export const WorkCard = ({ imgsrc, title, text, view }) => {
  return (
    <div className="project-card">
      <img src={imgsrc} alt="html tags" />
      <div className="pro-details">
        <h2 className="project-title">{title}</h2>

        <p>{text}</p>
        <div className="pro-btns">
          <NavLink to={view} className="btn">
            View
          </NavLink>
          <NavLink to="Google.com" className="btn">
            Source
          </NavLink>
        </div>
      </div>
    </div>
  );
};
