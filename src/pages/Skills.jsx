import React from "react";
import HeaderFlip from "@/components/HeaderFlip";
import StackCloud from "@/components/StackCloud";

const Skills = () => {
  return (
    <div className=" grow">
      {/* // Header */}
      <div className="space-y-3 mt-24">
        <div className="w-min">
          <HeaderFlip className="text-2xl md:text-4xl lg:text-5xl text-primary dark:text-primary">
            Skills
          </HeaderFlip>
        </div>
      </div>

      <div className="bg-transparent">
        <StackCloud />
      </div>
    </div>
  );
};

export default Skills;
