import UseAnimationFrame from "@/components/Cube";
import HeaderFlip from "@/components/HeaderFlip";

const About = () => {
  return (
    // <div className="flex justify-center items-center min-h-screen bg-gray-300">
    <div className="bg-gray-300/15 grow">
      {/* // Header */}
      <div className="space-y-3 mt-24">
        <div className="w-min">
          <HeaderFlip className="text-2xl md:text-4xl lg:text-5xl text-primary dark:text-primary">
            About
          </HeaderFlip>
        </div>
      </div>

      {/* <UseAnimationFrame /> */}
    </div>
  );
};

export default About;
