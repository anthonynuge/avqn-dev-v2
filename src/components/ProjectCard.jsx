const ProjectCard = ({ title, description, tags, link, gif, className }) => {
  return (
    <a
      href={link}
      className="projectCard z-50 overflow-visible lg:max-w-[450px]"
    >
      <div
        className={`rounded-lg overflow-hidden shadow dark:bg-card-bg bg-gray-200 border-1 border-neutral-800/30 dark:border-neutral-200/20 ${className}`}
      >
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
        <div className="flex py-4 px-4 bg-neutral-100 dark:bg-card-bg border-t-1 border-neutral-800/60 dark:border-neutral-200/10">
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
