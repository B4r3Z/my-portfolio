import React from "react";
import { HeroImg2 } from "../components/hero2/Hero2";
import { PricingCard } from "../components/pricingCard/PricingCard";
import { Work } from "../components/work/Work";

export const Projects = () => {
  return (
    <div>
      <HeroImg2 heading="myProjects" text="What you're probably here for" />
      <Work />
      <PricingCard />
    </div>
  );
};
