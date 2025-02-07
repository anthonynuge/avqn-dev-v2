import React from "react";
import { projects } from "../data/projectsData";
import ProjectCard from "./ProjectCard";

const FeaturedProject = () => {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 2);

  return (
    <div className="my-2">
      <h3 className=" font-medium my-2">Featured Projects</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {featuredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            tags={project.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProject;
