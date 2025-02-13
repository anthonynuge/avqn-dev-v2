import HeaderFlip from "@/components/HeaderFlip";
import { projects } from "@/data/projectsData";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  return (
    <>
      <div className="space-y-3 mt-24">
        <div className="w-min">
          <HeaderFlip className="text-2xl md:text-4xl lg:text-5xl text-primary dark:text-primary">
            Projects
          </HeaderFlip>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto scroll-container mt-4 relative pl-1">
        <div className="mt-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 overflow-visible absolute">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                link={project.link}
                tags={project.tags}
                gif={project.gif}
                className="relative z-10"
              />
            ))}
          </div>
        </div>
      </div>
      {/* // </div> */}
    </>
  );
};

export default Projects;
