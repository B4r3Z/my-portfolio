import "./workCard/WorkCardStyle.css";

import React from "react";
import { WorkCard } from "./workCard/WorkCard";
import WorkCardData from "./WorkCardData";

export const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {WorkCardData.map((val, index) => {
          return (
            <WorkCard
              key={index}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
            />
          );
        })}
      </div>
    </div>
  );
};
