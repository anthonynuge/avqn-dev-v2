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
      <div className="grow mt-4 space-y-16">
        {experiances.map((experience, index) => (
          <div key={index}>
            <div className="grid relative">
              <a
                href={experience.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={experience.image} alt="Company Cover Image" />
              </a>
            </div>
            {/* content */}
            <div className="mt-4">
              <div className="flex flex-col sm:flex-row justify-between gap-0 sm:gap-1 sm:items-center">
                <a
                  href={experience.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="text-lg item">
                    {experience.company}{" "}
                    <span className="text-xs">- {experience.role}</span>
                  </h3>
                </a>
                <p className="text-xs dark:text-white">
                  {experience.start} - {experience.end}
                </p>
              </div>
              <p className="text-sm mb-4 mt-1">{experience.summary}</p>
              <ul className="text-sm list-disc pl-5 mt-1">
                {experiances[0].points.map((point, index) => (
                  <li key={index} className="mb-1">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Experiance;
