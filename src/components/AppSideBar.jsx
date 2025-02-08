import { useState, useEffect } from "react";

import {
  Home,
  Inbox,
  Search,
  BriefcaseBusiness,
  UserRound,
  Hammer,
  Moon,
  Sun,
  Download,
} from "lucide-react";

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

import { Button } from "@/components/ui/button";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AppSidebar({ toggleTheme, isDarkMode }) {
  const [rotated, setRotated] = useState(false);

  // Menu items.

  useEffect(() => {
    setRotated(true); // Trigger animation when theme changes
    setTimeout(() => setRotated(false), 400); // Reset after animation duration
  }, [isDarkMode]);

  const navItems = [
    {
      title: "Home",
      url: "#",
      icon: Home,
    },
    {
      title: "Experiance",
      url: "#",
      icon: BriefcaseBusiness,
    },
    {
      title: "Projects",
      url: "#",
      icon: Hammer,
    },
    {
      title: "About",
      url: "#",
      icon: UserRound,
    },
    {
      title: "Inbox",
      url: "#",
      icon: Inbox,
    },
    {
      title: "Search",
      url: "#",
      icon: Search,
    },
  ];

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center h-12 px-2 gap-4">
          <Avatar className="size-10">
            <AvatarImage src="https://github.com/anthonynuge.png" />
            <AvatarFallback>AN</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-foreground">Anthony Nguyen</p>
            <p className="text-xs">Software Engineer</p>
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
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
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
              onClick={toggleTheme}
              className="hover:bg-accent-foreground/10"
            >
              <span
                className={`transition-transform duration-500 ease-in-out ${
                  rotated ? "rotate-180" : "rotate-0"
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
