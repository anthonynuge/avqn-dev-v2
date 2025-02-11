import HeaderFlip from "@/components/HeaderFlip";

const About = () => {
  return (
    // <div className="flex justify-center items-center min-h-screen bg-gray-300">
    <div className=" grow">
      {/* // Header */}
      <div className="space-y-3 mt-24">
        <div className="w-min">
          <HeaderFlip className="text-2xl md:text-4xl lg:text-5xl text-primary dark:text-primary">
            About
          </HeaderFlip>
        </div>
      </div>

      {/* main */}
      <div className="block md:flex gap-9 mt-3">
        {/* avatar */}
        <div className="relative rounded-2xl overflow-hidden w-fit">
          <img src="https://github.com/anthonynuge.png" alt="" />
        </div>

        <div className="mt-3 lg:w-[60%] flex flex-col gap-5">
          <div className="w-min">
            <HeaderFlip className="text-md md:text-xl lg:text-3xl text-primary dark:text-primary">
              Software
            </HeaderFlip>
            <HeaderFlip className="text-md md:text-xl lg:text-3xl text-primary dark:text-primary">
              Developer,
            </HeaderFlip>
            <HeaderFlip className="text-md md:text-xl lg:text-3xl text-primary dark:text-primary">
              Graduate
            </HeaderFlip>
          </div>

          <p>
            I'm Anthony, a software developer based in Houston, Texas, with a
            background in technology and healthcare.
          </p>
          <p>
            In the past year I have had the opportunity to develope software in
            a variety of different settings - from personal projects, to
            features for a local marketing agency, and collaborated with
            cross-functional teams at a startup.
          </p>
        </div>
        {/* avatar */}
        {/* <div className="relative rounded-full overflow-hidden mx-auto">
          <img
            src="https://github.com/anthonynuge.png"
            alt=""
            height={250}
            width={250}
          />
        </div> */}
      </div>
    </div>
  );
};

export default About;
