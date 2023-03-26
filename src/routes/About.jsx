import React from "react";
import { AboutContent } from "../components/aboutContent/AboutContent";
import { HeroImg2 } from "../components/hero2/Hero2";

export const About = () => {
  return (
    <div>
      <HeroImg2 heading="whoAmI?" text="What makes me, me?" />
      <AboutContent />
    </div>
  );
};
