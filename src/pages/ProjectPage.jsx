import { useParams } from "react-router-dom";
import { projects } from "@/data/projectsData";
import HeaderFlip from "@/components/HeaderFlip";

const ProjectPage = () => {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <div>Project not found.</div>;
  }

  console.log(project.gif);

  return (
    <>
      <div className="space-y-3 mt-24">
        <div className="w-min">
          <HeaderFlip className="text-2xl md:text-4xl lg:text-5xl text-primary dark:text-primary">
            {project.title}
          </HeaderFlip>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto scroll-container mt-4 relative pl-1">
        <div className="w-full aspect-video flex items-center justify-center">
          <video autoPlay muted loop className="video">
            <source src={project.gif} type="video/mp4" />
          </video>

          {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 overflow-visible absolute">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                id={project.id}
                title={project.title}
                description={project.description}
                link={project.link}
                tags={project.tags}
                gif={project.gif}
                className="relative z-10"
              />
            ))}
          </div> */}
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
