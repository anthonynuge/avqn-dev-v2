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
            <p className="text-sm mb-2">I have always been drawn to the concept of building and improving things—breaking them down, understanding how they work, and finding ways to make them better. This curiosity led me to pursue a career in software engineering, where I can create something from scratch or deconstruct and enhance existing systems. </p>
            <p className="text-sm mb-2">
              I value simplicity, efficiency, and quality in everything I do. Whether in softwares or in my life, I focus on using the best tools and resources while eliminating unnecessary complexity. I believe great design is intentional—where every element serves a purpose. In my projects, I ensure that each component is streamlined and functional, creating solutions that are both high-performing and user-friendly.
            </p>
            <p className="text-sm">
              Outside of coding, I enjoy relaxing with a good book, cooking, binge-watching a television series, or exploring and testing out new PC games.
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
