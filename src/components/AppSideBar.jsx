import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  Home,
  BookOpenText,
  BriefcaseBusiness,
  UserRound,
  Hammer,
  Moon,
  Sun,
  Download,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AppSidebar({ toggleTheme, isDarkMode }) {
  const [rotated, setRotated] = useState(false);

  const handleThemeToggle = () => {
    if (rotated) return;
    setRotated(true);
    toggleTheme();

    setTimeout(() => {
      setRotated(false); // Reset rotation state after animation completes
    }, 500);
  };

  const navItems = [
    {
      title: "Home",
      url: "/",
      icon: Home,
    },
    {
      title: "Experiance",
      url: "experiance",
      icon: BriefcaseBusiness,
    },
    {
      title: "Projects",
      url: "projects",
      icon: Hammer,
    },
    {
      title: "About",
      url: "about",
      icon: UserRound,
    },
    {
      title: "Skills",
      url: "skills",
      icon: BookOpenText,
    },
  ];

  const contactItems = [
    {
      title: "Github",
      url: "https://github.com/anthonynuge",
      icon: FaGithub,
    },
    {
      title: "Linkedin",
      url: "https://www.linkedin.com/in/anthony-nguyen-02861b331/",
      icon: FaLinkedin,
    },
    {
      title: "Facebook",
      url: "https://www.facebook.com/anthony.nguyen.984786",
      icon: FaFacebook,
    },
    {
      title: "Instagram",
      url: "https://www.instagram.com/anthrnee/",
      icon: FaInstagram,
    },
  ];


  return (

    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center h-12 pl-2 justify-between">
          <div className="flex items-center h-12 gap-4">

            <Avatar className="size-10">
              <AvatarImage src="https://github.com/anthonynuge.png" />
              <AvatarFallback>AN</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold text-foreground">Anthony Nguyen</p>
              <p className="text-xs">Software Engineer</p>
            </div>
          </div>

        </div>
      </SidebarHeader>


      <SidebarContent>
        {/* Get to know me sections */}
        <SidebarGroup>
          <SidebarGroupLabel>Get to know me</SidebarGroupLabel>
          <SidebarContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="hover:bg-accent-foreground/10"
                  >
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </SidebarGroup>

        {/* Setting sections */}
        <SidebarGroup>
          <SidebarGroupLabel>Settings</SidebarGroupLabel>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={handleThemeToggle}
              className="hover:bg-accent-foreground/10"
            >
              <span
                className={`transition-transform duration-500 ease-in-out ${rotated ? "rotate-180" : "rotate-0"
                  }`}
              >
                {isDarkMode ? (
                  <Sun className="size-[16px]" />
                ) : (
                  <Moon className="size-[16px]" />
                )}
              </span>
              <span>Theme</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarGroup>

        {/* Contanct me */}
        <SidebarGroup>
          <SidebarGroupLabel>Say hi</SidebarGroupLabel>
          <SidebarContent>
            <SidebarMenu>
              {contactItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="hover:bg-accent-foreground/10"
                  >
                    <a
                      href={item.url}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenuButton asChild className="hover:bg-accent-foreground/10">
          <a href="#">
            <Download />
            <span>Download Resume</span>
          </a>
        </SidebarMenuButton>
      </SidebarFooter>
    </Sidebar>
  );
}
