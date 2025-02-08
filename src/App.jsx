import { useState, useEffect } from "react";

// import Hero from "./components/Hero";
import Footer from "./components/Footer";
// import FeaturedProject from "./components/FeaturedProject";
// import Experiance from "./sections/Experiance";

import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import { AppSidebar } from "./components/AppSideBar";
import { Routes, Route } from "react-router-dom";

import Home from "@/pages/Home";
import Experiance from "@/pages/Experiance";
import Projects from "@/pages/Projects";
import About from "@/pages/About";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const html = document.documentElement;
    html.classList.add("theme-transition");
    setTimeout(() => {
      html.classList.remove("theme-transition");
    }, 400);
    html.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="overflow-x-hidden antialiased">
      <div className="top-0 -z-10 h-full w-full"></div>
      <div className="absolute top-0 z-[-2] h-screen w-screen"></div>

      <SidebarProvider>
        <AppSidebar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <SidebarTrigger />

        <div className="container mx-auto px-5 max-w-[1000px]">
          <div className="flex flex-col w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/experiance" element={<Experiance />} />
            </Routes>

            <Footer />
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default App;
