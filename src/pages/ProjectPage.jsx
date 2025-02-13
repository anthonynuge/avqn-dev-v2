import { useParams } from "react-router-dom";

const ProjectPage = () => {
  const { projectId } = useParams;

  return <div>ProjectPage</div>;
};

export default ProjectPage;
