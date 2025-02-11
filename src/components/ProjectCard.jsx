const ProjectCard = ({ title, description, tags, link, gif }) => {
  return (
    <a href={link} className="projectCard z-50 overflow-visible">
      <div className="rounded-lg overflow-hidden shadow dark:bg-card-bg bg-gray-200 border-1 border-neutral-800/30">
        <div className="w-full aspect-video flex items-center justify-center">
          {/* <img src={demo} alt="projectgif" className="object-cover" /> */}
          <video
            src={gif}
            type="video/mp4"
            autoPlay={true}
            muted={true}
            loop={true}
            className="video"
          ></video>
        </div>
        {/* description portion */}
        <div className="flex py-5 px-6 bg-neutral-100 dark:bg-card-bg border-t-1 border-neutral-800/60">
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
