import HeaderFlip from "@/components/HeaderFlip";
import { projects } from "@/data/projectsData";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  return (
    <div className="">
      <div className="space-y-3 mt-24">
        <div className="w-min">
          <HeaderFlip className="text-2xl md:text-4xl lg:text-5xl text-primary dark:text-primary">
            Projects
          </HeaderFlip>
        </div>
      </div>
      <div>
        <div className="mt-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 overflow-y-auto absolute">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                link={project.link}
                tags={project.tags}
                gif={project.gif}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
