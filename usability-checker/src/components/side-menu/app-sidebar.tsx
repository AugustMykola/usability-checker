"use client"

import * as React from "react"
import {
    AudioWaveform,
    BookOpen,
    Bot,
    Command,
    GalleryVerticalEnd, PlusIcon,
    SquareTerminal,
} from "lucide-react"

import { NavMain } from "./nav-main"
import { TeamSwitcher } from "./team-switcher"
import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
    SidebarRail,
} from "@/components/ui/sidebar"
import UXCard from "@/components/side-menu/ux-card";

// This is sample data.
const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    teams: [
        {
            name: "Acme Inc",
            logo: GalleryVerticalEnd,
            plan: "Projects",
        },
        {
            name: "Acme Corp.",
            logo: AudioWaveform,
            plan: "Projects",
        },
        {
            name: "Evil Corp.",
            logo: Command,
            plan: "Projects",
        },
    ],
    navMain: [
        {
            title: "Home page",
            url: "#",
            icon: SquareTerminal,
            isActive: true,
            items: [
                {
                    title: "Overview",
                    url: "#",
                    icon: SquareTerminal,
                },
                {
                    title: "Content Hierarchy",
                    url: "#",
                    icon: SquareTerminal,
                },
                {
                    title: "Page Performance",
                    url: "#",
                    icon: SquareTerminal,
                },
                {
                    title: "Accessibility",
                    url: "#",
                    icon: SquareTerminal,
                },
                {
                    title: "Conversion Analysis",
                    url: "#",
                    icon: SquareTerminal,
                },
                {
                    title: "Trust & Credibility",
                    url: "#",
                    icon: SquareTerminal,
                },
                {
                    title: "Psychological Factors",
                    url: "#",
                    icon: SquareTerminal,
                },
                {
                    title: "Funnel Diagnosis",
                    url: "#",
                    icon: SquareTerminal,
                },
                {
                    title: "Metrics Diagnosis",
                    url: "#",
                    icon: SquareTerminal,
                },
                {
                    title: "Content Analysis",
                    url: "#",
                    icon: SquareTerminal,
                },
            ]
        },
        {
            title: "Contacts page",
            url: "#",
            icon: Bot,
            items: [],
        },
        {
            title: "Services page",
            url: "#",
            icon: BookOpen,
            items: []
        }
    ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <TeamSwitcher teams={data.teams} />
            </SidebarHeader>
            <SidebarContent className="p-[24px]">
                <NavMain items={data.navMain} />
                <UXCard></UXCard>
            </SidebarContent>
        </Sidebar>
    )
}
