import Socials from "./Socials";
import HeaderFlip from "./HeaderFlip";

const Hero = () => {
  return (
    <div className="space-y-3 mt-24">
      <div className="w-[60%]">
        <HeaderFlip className="text-2xl md:text-4xl lg:text-5xl text-primary dark:text-primary">
          Anthony Nguyen
        </HeaderFlip>
        <h3 className="text-lg lg:text-xl">Full Stack Developer</h3>
      </div>
      <p className="text-sm lg:text-md lg:w-[75%] ">
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
