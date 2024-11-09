import * as React from "react";
import { Home, MessageCircle, ShoppingCart, Settings, Map, BotMessageSquare } from "lucide-react"; // Import icons

import { SearchForm } from "@/components/search-form";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

const data = {
  navMain: [
    {
      url: "#",
      items: [
        {
          title: "Home",
          url: "/",
          icon: <Home className="mr-1" /> // Adding Home icon
        },
        {
          title: "Navigate",
          url: "/navigate",
          icon: <Map className="mr-1" /> // You can replace this with another icon
        },
        {
          title: "AI Assistant",
          url: "/chat",
          icon: <BotMessageSquare className="mr-1" /> // Chat icon
        },
        {
          title: "Settings",
          url: "/settings",
          icon: <Settings className="mr-1" /> // Settings icon
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <h1 className="pt-3 pb-1 px-3">*App Logo*</h1>
        <SearchForm />
      </SidebarHeader>
      <SidebarContent className="px-3">
        {data.navMain.map((section) => (
          <SidebarMenu key={section.url}>
            {section.items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild isActive={true}>
                  <a className="px-3 py-5 flex items-center" href={item.url}>
                    {item.icon} {/* Render the icon */}
                    {item.title} {/* Render the title */}
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
