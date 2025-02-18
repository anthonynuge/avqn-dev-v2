import { projects } from "../data/projectsData";
import ProjectCard from "./ProjectCard";

const FeaturedProject = () => {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 2);

  return (
    <div className="mt-8">
      <h3 className=" font-medium my-2">Featured Projects</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {featuredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            id={project.id}
            title={project.title}
            description={project.description}
            link={project.link}
            tags={project.tags}
            gif={project.gif}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProject;
