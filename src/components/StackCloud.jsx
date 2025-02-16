"use client";
import { IconCloud } from "./magicui/icon-cloud";
import { useState, useEffect } from "react";
import techIcons from "@/data/skillsList";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "amazonwebservices",
  "postgresql",
  "vercel",
  "git",
  "jira",
  "github",
  "gitlab",
  "neovim",
  "python",
  "mysql",
];

const StackCloud = () => {
  const getDarkMode = () => document.documentElement.classList.contains("dark");
  const [isDarkMode, setIsDarkMode] = useState(getDarkMode());

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkMode(getDarkMode());
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  const color = isDarkMode ? "ffffff" : "000000"; // White for dark mode, Black for light mode

  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${color}`
  );

  console.log(images)
  return (
    <div className="relative flex size-fit max-w-lg items-center justify-center overflow-hidden rounded-lg">
      <IconCloud images={images} />
    </div>
  );
};

export default StackCloud;
