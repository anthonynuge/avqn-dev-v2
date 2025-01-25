import { experiances } from "../data/experiances";

const Experiance = () => {
  return (
    <div>
      <h3 className="text-text-hl">Experience</h3>
      <div>
        {experiances.map((experience, index) => (
          <div key={index} className="flex justify-between">
            <div className="">
              <p className="text-sm">
                {experience.start} - {experience.end}
              </p>
            </div>

            <div className="lg:w-3/4">
              <h4 className="text-text-hl">
                {experience.role} -<span> {experience.company} </span>
              </h4>
              <div className="text-sm">{experience.description}</div>
              <div>
                <ul>
                  {experience.tags.map((tech, index) => (
                    <li key={index}>{tech}</li>
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
