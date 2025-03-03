import { useParams } from "react-router-dom";
import { projects } from "@/data/projectsData";
import HeaderFlip from "@/components/HeaderFlip";

import { FaArrowRight } from "react-icons/fa";

const ProjectPage = () => {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <div>Project not found.</div>;
  }

  console.log(project.gif);

  return (
    <>
      <div className="space-y-3 mt-16">
        <div className="w-min">
          <HeaderFlip className="text-2xl md:text-4xl lg:text-5xl text-primary dark:text-primary">
            {project.title}
          </HeaderFlip>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto scroll-container mt-4 relative pl-1">
        <div className="flex flex-col gap-5">
          <div className="w-full aspect-video">
            <video autoPlay muted loop className="video">
              <source src={project.gif} type="video/mp4" />
            </video>
          </div>
          <p className="text-sm dark:text-neutral-200">{project.summary}</p>

          {/* tools data */}
          <div className="grid grid-cols-2 grid-rows-2 gap-4 lg:grid-rows-1 lg:grid-cols-4">
            <div className="row-start-1 col-start-1">
              <p className="text-sm">Scope</p>
              {project.scopes.map((s, index) => (
                <p key={index} className="projectItem">
                  {s}
                </p>
              ))}
            </div>

            <div className="row-start-1 col-start-2 lg:col-start-2">
              <p className="text-sm">Back-End</p>
              {project.tags.backEnd.map((tool, index) => (
                <p key={index} className="projectItem">
                  {tool}
                </p>
              ))}
            </div>

            <div className="row-start-2 col-start-1 lg:row-start-1 lg:col-start-3">
              <p className="text-sm">Front-End</p>
              {project.tags.frontEnd.map((tool, index) => (
                <p key={index} className="projectItem">
                  {tool}
                </p>
              ))}
            </div>

            <div className="row-start-2 col-start-2 lg:row-start-1 lg:col-start-4">
              <p className="text-sm">Tools</p>
              {project.tags.tools.map((tool, index) => (
                <p key={index} className="projectItem">
                  {tool}
                </p>
              ))}
            </div>
          </div>

          {/* links container */}
          <div className="flex flex-col lg:flex-row gap-4 justify-end">
            {project.link && (
              <a
                href={project.link}
                className="outlinkBtn w-full p-4 flex justify-between items-center rounded-md lg:w-[50%]"
              >
                <p className="text-xs">DEMO</p>
                <FaArrowRight size={12} />
              </a>
            )}
            {project.git && (
              <a
                href={project.git}
                className="outlinkBtn w-full p-4 flex justify-between items-center rounded-md lg:w-[50%]"
              >
                <p className="text-xs">GITHUB</p>
                <FaArrowRight size={12} />
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
