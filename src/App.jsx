import { useState, useEffect } from "react";

import Hero from "./components/Hero";
import Footer from "./components/Footer";
import FeaturedProject from "./components/FeaturedProject";
import Stack from "./sections/Stack";
import Experiance from "./sections/Experiance";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // useEffect(() => {
  //   // Check the user's preference or load saved theme from localStorage
  //   const savedTheme = localStorage.getItem("theme") || "light";
  //   const isDark = savedTheme === "dark";
  //   setIsDarkMode(isDark);
  //   document.documentElement.classList.toggle("dark", isDark);
  // }, []);

  const toggleTheme = () => {
    // Toggle the theme and save the user's preference
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="overflow-x-hidden antialiased">
      <div className="top-0 -z-10 h-full w-full"></div>
      <div className="absolute top-0 z-[-2] h-screen w-screen"></div>
      <div className="container mx-auto px-5 max-w-[1000px]">
        <div className="flex flex-col w-full">
          <button onClick={toggleTheme}>
            {isDarkMode ? "Switch To Light Mode" : "Switch to Dark Mode"}
          </button>
          <Hero />
          <FeaturedProject />
          <Experiance />
          {/* <Stack /> */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
