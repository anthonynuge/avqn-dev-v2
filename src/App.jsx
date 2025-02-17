import { useState, useEffect } from "react";

import Footer from "./components/Footer";

import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import { AppSidebar } from "./components/AppSideBar";
import { Routes, Route, useLocation, useNavigationType } from "react-router-dom";

import Home from "@/pages/Home";
import Experiance from "@/pages/Experiance";
import Projects from "@/pages/Projects";
import About from "@/pages/About";
import Skills from "@/pages/Skills";

import { Boxes } from "@/components/ui/background-boxes";
import ProjectPage from "./pages/ProjectPage";

import { AnimatePresence } from "framer-motion";
import LoadingScreen from "./pages/LoadingScreen";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const location = useLocation()
  const navigationType = useNavigationType();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (navigationType === "PUSH") {
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 500); // Simulate loading time
    }
  }, [location]);

  useEffect(() => {
    const html = document.documentElement;
    html.classList.add("theme-transition");
    setTimeout(() => {
      html.classList.remove("theme-transition");
      html.classList.toggle("dark", isDarkMode);
    }, 300);
  }, [isDarkMode]);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setTimeout(() => setIsDarkMode(!isDarkMode), 200);
    // setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="overflow-x-hidden antialiased relative transition-colors duration-500 ">
      {/* Grid Background (Boxes) - Positioned Behind Everything Else */}
      <div className="fixed h-full pointer-events-auto opacity-25">
        <Boxes />
      </div>

      <SidebarProvider>
        <AppSidebar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <SidebarTrigger className="z-30" />
        <div className="container mx-auto px-5 max-w-[1000px] flex flex-col">
          <AnimatePresence mode="wait">
            <LoadingScreen isLoading={isLoading} />
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/experiance" element={<Experiance />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects/:projectId" element={<ProjectPage />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </div>
      </SidebarProvider>
    </div>
  );
};

export default App;
