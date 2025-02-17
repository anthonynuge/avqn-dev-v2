import { useState, useEffect, useMemo } from "react";

import HeaderFlip from "@/components/HeaderFlip";
import { IconCloud } from "@/components/magicui/icon-cloud";

import skillsList from "@/data/skillsList";
import { motion, AnimatePresence, useAnimationControls } from "framer-motion"
import { skillItem, slideOutExit } from "@/animations/motionVariants";

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler)
  }, [value, delay]);

  return debouncedValue;
}

const Skills = () => {

  const [query, setQuery] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    setIsDarkMode(document.documentElement.classList.contains("dark"));
  }, [])
  // checking dark mode and update icons
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);
  const iconColor = isDarkMode ? "#ffffff" : "#000000"


  // Memoized filtered skills to prevent unnecessary re-renders
  const filteredSkills = useMemo(() => {
    return skillsList.filter((skill) =>
      skill.name.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
      skill.category.toLowerCase().includes(debouncedQuery.toLowerCase())

    );
  }, [debouncedQuery]);

  const memoizedIcons = useMemo(
    () =>
      filteredSkills.map((skill) => (
        <skill.icon key={skill.id} color={iconColor} size={90} />
      )),
    [filteredSkills, iconColor]
  );

  const groupedSkills = Object.entries(
    filteredSkills.reduce((acc, skill) => {
      acc[skill.category] = acc[skill.category] || [];
      acc[skill.category].push(skill);
      return acc;
    }, {})
  );

  const controls = useAnimationControls();

  useEffect(() => {
    controls.start({
      opacity: [0, 1], scale: [0.8, 1],
      transition: {
        ease: "easeOut",
        delay: 0.5
      }
    });
  }, [debouncedQuery]);

  return (
    <div className=" grow">
      {/* // Header */}
      <div className="space-y-3 mt-24">
        <div className="w-min">
          <HeaderFlip className="text-2xl md:text-4xl lg:text-5xl text-primary dark:text-primary">
            Skills
          </HeaderFlip>
        </div>
      </div>

      <div className="flex flex-col w-[50%] relative mr-auto">
        {/* search input */}
        <input
          type="text"
          placeholder="Search for technologies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="bg-neutral-700/50 p-2 my-4"
        />

        <div className="scroll-container flex flex-col gap-3 overflow-y-auto">
          {filteredSkills.length === 0 ? (
            <div className="grow h-full">
              <p>I have not worked with that before.</p>
              <h3 className="text-xl my-auto font-bold">But I am a fast learner!</h3>
            </div>

          ) : (
            <AnimatePresence>
              {groupedSkills.map(([category, skills]) => (
                <motion.div
                  key={category}
                  variants={slideOutExit}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  layout="position"
                  className="border rounded-lg overflow-hidden"
                >
                  <h2 className="p-2 bg-neutral-700/30">{category}</h2>
                  <div className="grid grid-cols-3 p-2 gap-2">
                    <AnimatePresence>
                      {skills.map(skill => (
                        <motion.div
                          key={skill.id}
                          variants={skillItem}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="flex items-center space-x-2 p-2 min-h-[60px]"
                        >
                          <skill.icon color={iconColor} />
                          <span className="text-sm">{skill.name}</span>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          )}
        </div>

        {/* Icon cloud */}
        <motion.div className="absolute left-125"
          animate={controls}
        >
          <IconCloud icons={memoizedIcons} />
        </motion.div>
      </div >
    </div >
  );
};

export default Skills;
