import { RiNextjsFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { TbBrandTypescript } from "react-icons/tb";
import { SiRedux } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiNeovim } from "react-icons/si";
import { FaJira } from "react-icons/fa6";

const Stack = () => {
  return (
    <section>
      <div className="">
        <h3 className="text-text-hl font-medium">Stack</h3>
        <p>Stuff I use on the regular.</p>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex">
            <RiNextjsFill className="text-text-hl" />
            <div>Next.js</div>
          </div>
          <div className="flex">
            <RiNextjsFill className="text-text-hl" />
            <div>Next.js</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stack;
