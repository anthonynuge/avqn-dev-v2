import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex gap-4 text-2xl pointer-events-auto z-50 absolute">
      <a
        href="https://github.com/anthonynuge"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaGithub className="socialIconLink" />
      </a>

      <a
        href="https://www.linkedin.com/in/anthony-nguyen-02861b331/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaLinkedin className="socialIconLink" />
      </a>

      <a
        href="https://www.facebook.com/anthony.nguyen.984786"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaFacebook className="socialIconLink" />
      </a>

      <a
        href="https://www.instagram.com/anthrnee/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaInstagram className="socialIconLink" />
      </a>
    </div>
  );
};

export default Socials;
