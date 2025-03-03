import HeaderFlip from "@/components/HeaderFlip";

const About = () => {
  return (
    <div
      className="grow">
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

        <div className="mt-3 lg:w-[60%] flex flex-col">
          <div className="w-min">
            <HeaderFlip className="text-md md:text-xl lg:text-3xl text-primary dark:text-primary">
              Software
            </HeaderFlip>
            <HeaderFlip className="text-md md:text-xl lg:text-3xl text-primary dark:text-primary">
              Developer,
            </HeaderFlip>
          </div>

          <p className="text-sm md:text-base mb-3">
            I&apos;m Anthony, a software developer based in Houston, Texas, with
            a background in technology and healthcare.
          </p>
          <p className="text-sm md:text-base">
            In the past year I have had the opportunity to develop software in
            a variety of different settings - from personal projects, to
            features for a local marketing agency, and working remotely in cross-functional teams
            teams at a startup.
          </p>
        </div>
      </div>

      {/* Additional Information */}
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 py-4">
        <div className="bg-gray col-span-1 md:col-span-2">
          <h3>Interests</h3>
          <div>
            <p className="text-sm mb-2">I’ve always been drawn to the idea of building and improving—breaking things down, figuring out how they work, and making them better. That curiosity is what led me into tech.</p>
            <p className="text-sm mb-2">
              I’m a minimalist—I value simplicity, efficiency, and high-quality functionality. I believe that the best designs are intentional, where everything serves a purpose.
            </p>
            <p className="text-sm">
              Outide of coding my hobbies include reading on my kindle, bingeing a good netflix series, and cooking.
            </p>
          </div>

        </div>

        <div className="">
          <h3 className="">Education</h3>
          <div className="mb-6">
            <div className="text-sm flex justify-between">
              <div className="text-sm">Western Governors University</div>
            </div>
            <p className="text-sm">B.S Computer Science</p>
          </div>

          <div>
            <div className="text-sm flex justify-between">
              <div className="text-sm">University of Houston</div>
            </div>
            <p className="text-sm">B.S Kinsiology</p>
          </div>

        </div>

        {/* <div className="bg-gray"> */}
        {/*   <h3>other</h3> */}
        {/*   <p></p> */}
        {/* </div> */}

      </div>
    </div>
  );
};

export default About;
