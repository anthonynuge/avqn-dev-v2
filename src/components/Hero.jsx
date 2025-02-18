import Socials from "./Socials";
import HeaderFlip from "./HeaderFlip";

const Hero = () => {
  return (
    <div className="space-y-3 mt-24">
      <div className="w-min">
        <HeaderFlip className="text-2xl md:text-4xl lg:text-5xl text-primary dark:text-primary">
          Anthony Nguyen
        </HeaderFlip>
        <h3 className="text-lg lg:text-xl">Full Stack Developer</h3>
      </div>
      <p className="text-xs md:text-sm lg:text-md lg:w-[68%] ">
        Hi I am Anthony, a developer specializing in web developement.
        I like to craft digital experiances for the web,
        bringing pixels to life, one design at a time.
        Currently based in Houston, Texas.
      </p>
      <div className="">
        <Socials />
      </div>
    </div>
  );
};
export default Hero;
