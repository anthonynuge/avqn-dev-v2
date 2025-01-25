import React from "react";

const ProjectCard = ({ title, description, tags, link }) => {
  return (
    <a href={link}>
      <div className="rounded-2xl overflow-hidden">
        <div className="w-full h-50 bg-neutral-800">Video Section</div>
        <div className="flex bg-card py-5 px-6">
          <div className="w-[80%]">
            <h4 className="text-text-hl font-semibold">{title}</h4>
            <p className="text-sm">{description}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
