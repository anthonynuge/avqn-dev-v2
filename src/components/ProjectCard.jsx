import demo from "../assets/demos/fruitclassifier.gif";

const ProjectCard = ({ title, description, tags, link }) => {
  return (
    <a href={link} className="z-50">
      <div className="rounded-lg overflow-hidden shadow dark:bg-card-bg bg-gray-200">
        <div className="w-full aspect-video relative overflow-hidden border border-neutral-800 flex items-center justify-center">
          <img src={demo} alt="projectgif" className="object-cover" />
        </div>
        {/* description portion */}
        <div className="flex py-5 px-6 bg-card-bg">
          <div className="w-[80%]">
            <h4 className="font-semibold">{title}</h4>
            <p className="text-sm">{description}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
