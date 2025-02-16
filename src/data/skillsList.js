import {
  SiNextdotjs, SiMongodb, SiMysql, SiTypescript, SiCss3, SiTailwindcss,
  SiAppwrite, SiExpress, SiNodedotjs, SiJavascript, SiPython, SiHtml5, SiJupyter,
  SiNeovim, SiRedux, SiVercel, SiGit,
  SiScikitlearn, SiNotion, SiObsidian, SiPostman,
  SiTensorflow, SiNumpy, SiGithub, SiJira, SiFramer,
} from "react-icons/si";

import { FaJava, FaLinux } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

export const skillsList = [
  { id: 1, name: "JavaScript", icon: SiJavascript, category: "Programming Languages" },
  { id: 2, name: "TypeScript", icon: SiTypescript, category: "Programming Languages" },
  { id: 3, name: "Java", icon: FaJava, category: "Programming Languages" },
  { id: 4, name: "Python", icon: SiPython, category: "Programming Languages" },

  { id: 5, name: "Next.js", icon: SiNextdotjs, category: "Front End" },
  { id: 6, name: "CSS", icon: SiCss3, category: "Front End" },
  { id: 7, name: "Tailwind CSS", icon: SiTailwindcss, category: "Front End" },
  { id: 8, name: "HTML", icon: SiHtml5, category: "Front End" },
  { id: 9, name: "Redux", icon: SiRedux, category: "Front End" },
  { id: 10, name: "Framer Motion", icon: SiFramer, category: "Front End" },

  { id: 11, name: "Node.js", icon: SiNodedotjs, category: "Backend" },
  { id: 12, name: "Express.js", icon: SiExpress, category: "Backend" },
  { id: 13, name: "Appwrite", icon: SiAppwrite, category: "Backend" },

  { id: 14, name: "MongoDB", icon: SiMongodb, category: "Databases" },
  { id: 15, name: "MySQL", icon: SiMysql, category: "Databases" },

  { id: 16, name: "Git", icon: SiGit, category: "Dev Tools" },
  { id: 17, name: "GitHub", icon: SiGithub, category: "Dev Tools" },
  { id: 18, name: "VS Code", icon: VscVscode, category: "Dev Tools" },
  { id: 19, name: "Neovim", icon: SiNeovim, category: "Dev Tools" },
  { id: 20, name: "Postman", icon: SiPostman, category: "Dev Tools" },
  { id: 21, name: "Jira", icon: SiJira, category: "Dev Tools" },
  { id: 22, name: "Vercel", icon: SiVercel, category: "Dev Tools" },
  { id: 23, name: "Linux", icon: FaLinux, category: "Dev Tools" },

  { id: 24, name: "Notion", icon: SiNotion, category: "Productivity" },
  { id: 25, name: "Obsidian", icon: SiObsidian, category: "Productivity" },

  { id: 26, name: "Jupyter Notebooks", icon: SiJupyter, category: "Data Science & Machine Learning" },
  { id: 27, name: "Scikit-Learn", icon: SiScikitlearn, category: "Data Science & Machine Learning" },
  { id: 28, name: "TensorFlow", icon: SiTensorflow, category: "Data Science & Machine Learning" },
  { id: 29, name: "NumPy", icon: SiNumpy, category: "Data Science & Machine Learning" },
];

export default skillsList;

