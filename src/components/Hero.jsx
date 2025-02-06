import Socials from "./Socials";
import React from "react";

const Hero = () => {
  return (
    <div className="space-y-5 mt-24">
      <div>
        <h1 className="text-5xl font-bold">Anthony Nguyen</h1>
        <h3 className="text-2xl">Full Stack Developer</h3>
      </div>
      <p>
        I like to build cool stuff that not only looks good but runs good I’m a
        full-stack developer who loves solving problems and creating efficient,
        impactful solutions. Whether it’s designing intuitive UIs, building
        integrations, or tackling algorithms, I thrive on challenges and
        learning.
      </p>
      <Socials />
    </div>
  );
};
export default Hero;
