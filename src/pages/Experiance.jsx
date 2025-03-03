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
          <div className="flex flex-col sm:flex-row justify-between gap-0 sm:gap-1 sm:items-center">
            <h3 className="text-lg item">{experiances[0].company} <span className="text-xs">- {experiances[0].role}</span></h3>
            <p className="text-xs dark:text-white">{experiances[0].start} - {experiances[0].end}</p>
          </div>
          <p className="text-sm mb-4">{experiances[0].summary}</p>
          <ul className="text-sm list-disc pl-5 mt-1">
            {experiances[0].points.map((point, index) => (
              <li key={index} className="mb-1">{point}</li>
            ))}
          </ul>
        </div>
      </div >
    </>
  );
};

export default Experiance;
