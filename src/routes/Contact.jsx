import React from "react";
import { Form } from "../components/form/Form";
import { HeroImg2 } from "../components/hero2/Hero2";

export const Contact = () => {
  return (
    <div>
      <HeroImg2 heading="contactMe" text="Let's get down to business" />
      <Form />
    </div>
  );
};
