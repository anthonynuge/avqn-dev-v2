import { experiances } from "../data/experiances";

const Experiance = () => {
  return (
    <div>
      <h3 className="text-text-hl my-2">Experience</h3>
      <div>
        {experiances.map((experience, index) => (
          <div key={index} className="flex justify-between">
            <div className="">
              <p className="text-sm">
                {experience.start} - {experience.end}
              </p>
            </div>
            <div className="lg:w-3/6">
              <h4 className="text-text-hl">
                {experience.role} -<span> {experience.company} </span>
              </h4>
              <div className="text-sm">{experience.description}</div>
              <div>
                <ul className="flex space-x-2">
                  {experience.tags.map((tech, index) => (
                    <li
                      key={index}
                      className="relative text-xs border rounded-full px-2 py-0.5 group overflow-hidden mt-2"
                    >
                      <span className="absolute inset-0 group-hover:bg-muted-gray transition-colors duration-400 ease-in-out origin-center scale-0 group-hover:scale-100"></span>
                      <span className="group-hover:text-neutral-900 relative z-10 transition-colors duration-400">
                        {tech}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiance;
