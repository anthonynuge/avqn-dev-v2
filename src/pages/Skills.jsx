import { useState, useEffect, useMemo } from "react";

import HeaderFlip from "@/components/HeaderFlip";
import { IconCloud } from "@/components/magicui/icon-cloud";

import skillsList from "@/data/skillsList";
import { motion, AnimatePresence, useAnimationControls } from "framer-motion"
import { funMessage, skillItem, slideOutExit } from "@/animations/motionVariants";
import { Search } from "lucide-react";

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
  }, [debouncedQuery, controls]);

  return (
    <>
      <div className="relative flex flex-col items-center md:block">
        <motion.div className=" absolute top-[-20vh] left-[5vw] scale-60 sm:scale-60
          md:absolute md:left-[50%] md:top-[50%] md:-translate-y-1/2 md:scale-100"
          animate={controls}
        >
          <IconCloud icons={memoizedIcons} />
        </motion.div>

        <div className="mt-[calc(20px+20vh)] md:mt-16">
          <div className="space-y-3">
            <div className="w-min">
              <HeaderFlip className="text-2xl md:text-4xl lg:text-5xl text-primary dark:text-primary">
                Skills
              </HeaderFlip>
            </div>
          </div>

          <div className=" md:w-[50%] relative md:mr-auto">
            {/* search input */}
            <div className="relative lg:w-full py-1 text-xs lg:text-base mb-4 border-b-2 border-b-primary/50">
              <Search className="absolute top-1/2 transform -translate-y-1/2 left-2" size={20} />
              <input
                type="text"
                placeholder="Search for technologies..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="searchInput w-full"
              />
            </div>

            <div className="scroll-container overflow-y-auto h-[calc(100dvh-280px)] text-sm lg:text-base">
              {filteredSkills.length === 0 ? (
                <motion.div className="h-[100%] flex flex-col"
                  variants={funMessage}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <p>I have not worked with that before.</p>
                  <h3 className="lg:text-xl lg:my-auto font-bold">But I am a fast learner!</h3>
                </motion.div>

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
                      className="border rounded-lg overflow-hidden mb-4"
                    >
                      <h2 className="p-2 dark:bg-neutral-700/40 bg-neutral-300/50">{category}</h2>
                      <div className="grid grid-cols-3 p-2 gap-2">
                        <AnimatePresence>
                          {skills.map(skill => (
                            <motion.div
                              key={skill.id}
                              variants={skillItem}
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                              className="flex items-center space-x-2 p-1 lg:p-2 min-h-[30px] lg:min-h-[60px]"
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

          </div >

        </div>

      </div>

    </>
  );
};

export default Skills;
