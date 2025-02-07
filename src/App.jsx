import { useState } from "react";

import Hero from "./components/Hero";
import Footer from "./components/Footer";
import FeaturedProject from "./components/FeaturedProject";
import Experiance from "./sections/Experiance";

import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import { AppSidebar } from "./components/AppSideBar";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

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

      <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger />

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
      </SidebarProvider>
    </div>
  );
};

export default App;
