"use client";

import HeaderFlip from "@/components/HeaderFlip";
import { experiances } from "@/data/experiances";

const Experiance = () => {
  return (
    <>
      {/* Header */}
      <div className="space-y-3 mt-16">
        <div className="w-min">
          <HeaderFlip className="text-2xl md:text-4xl lg:text-5xl text-primary dark:text-primary">
            Experiance
          </HeaderFlip>
        </div>
      </div>
      {/* Main Content */}
      <div className="grow mt-4">
        <div className="grid relative">
          <img src="/images/AesynPage.png" alt="Work Home Page" />
        </div>
        {/* content */}
        <div className="mt-4">
          <h2 className="text-lg md:text-lg font-bold">{experiances[0].company}</h2>
          <p className="text-sm dark:text-neutral-200">{experiances[0].summary}</p>
          <ul className="text-sm md:text-base list-disc pl-5">
            {experiances[0].points.map((point, index) => (
              <li key={index} className="mb-2">{point}</li>
            ))}
          </ul>
        </div>
      </div >
    </>
  );
};

export default Experiance;
