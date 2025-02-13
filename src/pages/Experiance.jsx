"use client";

import HeaderFlip from "@/components/HeaderFlip";

const Experiance = () => {
  return (
    <>
      {/* Header */}
      <div className="space-y-3 mt-24">
        <div className="w-min">
          <HeaderFlip className="text-2xl md:text-4xl lg:text-5xl text-primary dark:text-primary">
            Experiance
          </HeaderFlip>
        </div>
      </div>
      {/* Main Content */}
      <div className="grow">
        <div className="grid relative">
          <img src="/images/AesynPage.png" alt="Work Home Page" />
        </div>
      </div>
    </>
  );
};

export default Experiance;
