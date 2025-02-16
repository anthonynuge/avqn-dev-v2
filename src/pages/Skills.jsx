import { useState, useEffect } from "react";

import HeaderFlip from "@/components/HeaderFlip";
import { IconCloud } from "@/components/magicui/icon-cloud";

import skillsList from "@/data/skillsList";

const Skills = () => {

  const [query, setQuery] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

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

  const filteredSkills = skillsList.filter(skill =>
    skill.name.toLowerCase().includes(query.toLowerCase()) ||
    skill.category.toLowerCase().includes(query.toLowerCase())
  );

  const groupedSkills = Object.entries(
    filteredSkills.reduce((acc, skill) => {
      acc[skill.category] = acc[skill.category] || [];
      acc[skill.category].push(skill);
      return acc;
    }, {})
  );

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

        <div className="flex flex-col gap-3">
          {filteredSkills.length === 0 ? (
            <div className="grow h-full">
              <p>I have not worked with that before.</p>
              <h3 className="text-xl my-auto font-bold">But I am a fast learner!</h3>
            </div>

          ) : (
            groupedSkills.map(([category, skills]) => (
              <div key={category} className="border rounded-lg overflow-hidden">
                <h2 className="p-2 bg-neutral-700/30">{category}</h2>
                <div className="grid grid-cols-3 p-2 gap-2">
                  {skills.map(skill => {
                    return (
                      <div key={skill.id} className="flex items-center space-x-2 p-2 min-h-[60px]">
                        <skill.icon color={iconColor} />
                        <span className="text-sm">{skill.name}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Icon cloud */}
        <div className="absolute left-125">
          <IconCloud icons={filteredSkills.map((skill) =>
            <skill.icon key={skill.id} color={iconColor} size={90} />
          )} />
        </div>

      </div >
    </div >
  );
};

export default Skills;
