import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex gap-4 text-2xl">
      <FaGithub />
      <FaLinkedin />
      <FaFacebook />
      <FaInstagram />
    </div>
  );
};

export default Socials;
