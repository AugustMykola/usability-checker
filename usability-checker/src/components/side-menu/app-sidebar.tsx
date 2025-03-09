"use client"

import * as React from "react"
import {
    AudioWaveform,
    Command,
    GalleryVerticalEnd,
    File, Plus
} from "lucide-react"

import {NavMain} from "./nav-main"
import {TeamSwitcher} from "./team-switcher"
import {
    Sidebar,
    SidebarContent,
    SidebarHeader
} from "@/components/ui/sidebar"
import UXCard from "@/components/side-menu/ux-card";

const Overview = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.66699 11.3337L4.66699 8.66699" stroke="#75777C" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M8 11.3337L8 4.66699" stroke="#75777C" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M11.334 11.334L11.334 7.33398" stroke="#75777C" strokeWidth="1.2" strokeLinecap="round"/>
        <path
            d="M1.66699 8.00033C1.66699 5.01476 1.66699 3.52198 2.59449 2.59449C3.52198 1.66699 5.01476 1.66699 8.00033 1.66699C10.9859 1.66699 12.4787 1.66699 13.4062 2.59449C14.3337 3.52198 14.3337 5.01476 14.3337 8.00033C14.3337 10.9859 14.3337 12.4787 13.4062 13.4062C12.4787 14.3337 10.9859 14.3337 8.00033 14.3337C5.01476 14.3337 3.52198 14.3337 2.59449 13.4062C1.66699 12.4787 1.66699 10.9859 1.66699 8.00033Z"
            stroke="#75777C" strokeWidth="1.2" strokeLinejoin="round"/>
    </svg>
)

const UsabilityDiagnouse = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M9.33366 12.0003V4.00033C9.33366 3.69033 9.33366 3.53534 9.29958 3.40817C9.20712 3.06308 8.93757 2.79353 8.59248 2.70107C8.46531 2.66699 8.31032 2.66699 8.00033 2.66699C7.69033 2.66699 7.53534 2.66699 7.40817 2.70107C7.06308 2.79353 6.79353 3.06308 6.70107 3.40817C6.66699 3.53534 6.66699 3.69033 6.66699 4.00033V12.0003C6.66699 12.3103 6.66699 12.4653 6.70107 12.5925C6.79353 12.9376 7.06308 13.2071 7.40817 13.2996C7.53534 13.3337 7.69033 13.3337 8.00033 13.3337C8.31032 13.3337 8.46531 13.3337 8.59248 13.2996C8.93757 13.2071 9.20712 12.9376 9.29958 12.5925C9.33366 12.4653 9.33366 12.3103 9.33366 12.0003Z"
            fill="#0052FF" stroke="#0052FF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path
            d="M13.9997 5.33366V4.00033C13.9997 3.69033 13.9997 3.53534 13.9656 3.40817C13.8731 3.06308 13.6036 2.79353 13.2585 2.70107C13.1313 2.66699 12.9763 2.66699 12.6663 2.66699C12.3564 2.66699 12.2014 2.66699 12.0742 2.70107C11.7291 2.79353 11.4595 3.06308 11.3671 3.40817C11.333 3.53534 11.333 3.69033 11.333 4.00033V5.33366C11.333 5.64365 11.333 5.79864 11.3671 5.92581C11.4595 6.2709 11.7291 6.54045 12.0742 6.63292C12.2014 6.66699 12.3564 6.66699 12.6663 6.66699C12.9763 6.66699 13.1313 6.66699 13.2585 6.63292C13.6036 6.54045 13.8731 6.2709 13.9656 5.92581C13.9997 5.79864 13.9997 5.64365 13.9997 5.33366Z"
            fill="#0052FF" stroke="#0052FF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path
            d="M4.66667 8.00033V4.00033C4.66667 3.69033 4.66667 3.53534 4.63259 3.40817C4.54013 3.06308 4.27058 2.79353 3.92549 2.70107C3.79832 2.66699 3.64332 2.66699 3.33333 2.66699C3.02334 2.66699 2.86835 2.66699 2.74118 2.70107C2.39609 2.79353 2.12654 3.06308 2.03407 3.40817C2 3.53534 2 3.69033 2 4.00033V8.00033C2 8.31032 2 8.46531 2.03407 8.59248C2.12654 8.93757 2.39609 9.20712 2.74118 9.29958C2.86835 9.33366 3.02334 9.33366 3.33333 9.33366C3.64332 9.33366 3.79832 9.33366 3.92549 9.29958C4.27058 9.20712 4.54013 8.93757 4.63259 8.59248C4.66667 8.46531 4.66667 8.31032 4.66667 8.00033Z"
            fill="#0052FF" stroke="#0052FF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)

const ContentHierarchy = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 14H6.66667C4.46678 14 3.36683 14 2.68342 13.3166C2 12.6332 2 11.5332 2 9.33333V2" stroke="#75777C" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M4.66634 2.66699H5.33301" stroke="#75777C" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M4.66634 4.66699H7.33301" stroke="#75777C" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M3.33301 13.3337C4.04696 12.0357 5.01487 8.67957 6.87053 8.67957C8.15308 8.67957 8.48523 10.3148 9.74209 10.3148C11.9045 10.3148 11.591 6.66699 13.9997 6.66699" stroke="#75777C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

)

const PagePerformance = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 14H6.66667C4.46678 14 3.36683 14 2.68342 13.3166C2 12.6332 2 11.5332 2 9.33333V2" stroke="#75777C" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M8.66699 6.66699L8.66699 14.0003" stroke="#75777C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 8.66699L12 14.0003" stroke="#75777C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5.33301 8.66699L5.33301 13.3337" stroke="#75777C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 5.32429C12.7733 5.32429 11.4615 5.49469 10.5847 4.32865C9.58652 3.00113 7.74681 3.00113 6.74863 4.32865C5.87188 5.49469 4.56002 5.32429 3.33333 5.32429H2" stroke="#75777C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)

const Accessibility = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="5.66602" cy="7" r="1" stroke="#75777C" strokeWidth="1.2"/>
        <circle cx="9.66602" cy="10.333" r="1" stroke="#75777C" strokeWidth="1.2"/>
        <circle cx="12.333" cy="5" r="1" stroke="#75777C" strokeWidth="1.2"/>
        <path d="M10.2894 9.53085L12 6M6.38834 7.71229L8.80253 9.53085M2 12.6667L5.05972 7.91946" stroke="#75777C"
              strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path
            d="M13.333 14H5.99967C3.79979 14 2.69984 14 2.01643 13.3166C1.33301 12.6332 1.33301 11.5332 1.33301 9.33333V2"
            stroke="#75777C" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
)

const ConversionAnalysis = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.666 2.25609V1.33301M13.0864 2.9088L13.7381 2.25609M13.7444 5.33301H14.666" stroke="#75777C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.6663 7.99967C14.6663 11.1423 14.6663 12.7137 13.69 13.69C12.7137 14.6663 11.1423 14.6663 7.99967 14.6663C4.85697 14.6663 3.28563 14.6663 2.30932 13.69C1.33301 12.7137 1.33301 11.1423 1.33301 7.99967C1.33301 4.85697 1.33301 3.28563 2.30932 2.30932C3.28563 1.33301 4.85697 1.33301 7.99967 1.33301" stroke="#75777C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.90116 5.33789H10.0492C10.3018 5.33789 10.5065 5.54783 10.5065 5.80681V8.02359M1.83984 9.30556C3.35534 9.48273 7.15821 9.00911 9.92757 5.92642" stroke="#75777C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

)

const TrustCredibility = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 14H6.66667C4.46678 14 3.36683 14 2.68342 13.3166C2 12.6332 2 11.5332 2 9.33333V2" stroke="#75777C" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M12 7.33301H12.006" stroke="#75777C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.33301 10H9.339" stroke="#75777C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 4H8.00599" stroke="#75777C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5.33301 6.66699H5.339" stroke="#75777C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 13L14 2" stroke="#75777C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)
const PsychologicalFactors = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.344 1.33301C12.6017 1.33301 12 3.12387 12 5.33301H13.344C13.9918 5.33301 14.3156 5.33301 14.5161 5.10937C14.7166 4.88574 14.6817 4.59123 14.6119 4.00221C14.4276 2.4473 13.9295 1.33301 13.344 1.33301Z" stroke="#75777C" strokeWidth="1.2"/>
        <path d="M11.9997 5.36918V12.4302C11.9997 13.438 11.9997 13.9419 11.6917 14.1402C11.1884 14.4644 10.4104 13.7846 10.0191 13.5379C9.69577 13.334 9.53411 13.232 9.3547 13.2261C9.16082 13.2197 8.99629 13.3175 8.64692 13.5379L7.37301 14.3413C7.02937 14.558 6.85754 14.6663 6.66634 14.6663C6.47515 14.6663 6.30331 14.558 5.95968 14.3413L4.68576 13.5379C4.36244 13.334 4.20078 13.232 4.02136 13.2261C3.82749 13.2197 3.66296 13.3175 3.31359 13.5379C2.92231 13.7846 2.14426 14.4644 1.64098 14.1402C1.33301 13.9419 1.33301 13.438 1.33301 12.4302V5.36918C1.33301 3.46651 1.33301 2.51518 1.91879 1.92409C2.50458 1.33301 3.44739 1.33301 5.33301 1.33301H13.333" stroke="#75777C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6.66634 5.33268C5.92996 5.33268 5.33301 5.7804 5.33301 6.33268C5.33301 6.88497 5.92996 7.33268 6.66634 7.33268C7.40272 7.33268 7.99967 7.7804 7.99967 8.33268C7.99967 8.88497 7.40272 9.33268 6.66634 9.33268M6.66634 5.33268C7.24688 5.33268 7.74077 5.61095 7.92381 5.99935M6.66634 5.33268V4.66602M6.66634 9.33268C6.0858 9.33268 5.59192 9.05441 5.40888 8.66602M6.66634 9.33268V9.99935" stroke="#75777C" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>

)
const FunnelDiagnosis = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="3.33301" r="2" stroke="#75777C" strokeWidth="1.2"/>
        <ellipse cx="7.99935" cy="13.3333" rx="1.33333" ry="1.33333" stroke="#75777C" strokeWidth="1.2"/>
        <circle cx="13.3333" cy="13.3333" r="1.33333" stroke="#75777C" strokeWidth="1.2"/>
        <ellipse cx="2.66634" cy="13.3333" rx="1.33333" ry="1.33333" stroke="#75777C" strokeWidth="1.2"/>
        <path d="M13.3327 9.99935C13.3327 9.26297 12.5865 8.66602 11.666 8.66602H4.33268C3.41221 8.66602 2.66602 9.26297 2.66602 9.99935" stroke="#75777C" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M8 7.33301L8 9.99967" stroke="#75777C" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
)
const MetricsDiagnosis = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.667 10.5525C11.9993 14.5046 6.57637 15.6563 3.46794 12.5767C0.419982 9.55711 1.36361 4.08654 5.37135 2.33398" stroke="#75777C" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M11.7891 8.33366C13.0475 8.33366 13.6767 8.33366 14.0831 7.77031C14.0983 7.74926 14.1235 7.71149 14.1371 7.6894C14.5021 7.09839 14.314 6.64432 13.9379 5.73618C13.5968 4.91268 13.0968 4.16443 12.4665 3.53415C11.8362 2.90387 11.088 2.4039 10.2645 2.06279C9.35633 1.68663 8.90226 1.49855 8.31125 1.8635C8.28916 1.87714 8.25139 1.90238 8.23034 1.91757C7.66699 2.32393 7.66699 2.95314 7.66699 4.21157V5.61865C7.66699 6.89851 7.66699 7.53845 8.0646 7.93605C8.4622 8.33366 9.10214 8.33366 10.382 8.33366H11.7891Z" stroke="#75777C" strokeWidth="1.2"/>
    </svg>
)
const ContentAnalysis = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.33301 13.3333C4.99031 13.7983 4.85128 13.9601 4.56949 13.9952C4.28771 14.0304 4.09289 13.8691 3.70326 13.5465C2.25374 12.3462 1.33301 10.5502 1.33301 8.54317C1.33301 4.92947 4.31778 2 7.99967 2C11.6816 2 14.6663 4.92947 14.6663 8.54317C14.6663 10.5502 13.7456 12.3462 12.2961 13.5465C11.9065 13.8691 11.7116 14.0304 11.4299 13.9952C11.1481 13.9601 11.009 13.7983 10.6663 13.3333" stroke="#75777C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 6.99967L12 3.33301" stroke="#75777C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="8" cy="8" r="1" stroke="#75777C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)



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
            icon: File,
            isActive: true,
            items: [
                {
                    title: "Overview",
                    url: "#",
                    icon: Overview,
                },
                {
                    title: "Usability Diagnouse",
                    url: "#",
                    icon: UsabilityDiagnouse,
                },

                {
                    title: "Content Hierarchy",
                    url: "#",
                    icon: ContentHierarchy,
                },
                {
                    title: "Page Performance",
                    url: "#",
                    icon: PagePerformance,
                },
                {
                    title: "Accessibility",
                    url: "#",
                    icon: Accessibility,
                },
                {
                    title: "Conversion Analysis",
                    url: "#",
                    icon: ConversionAnalysis,
                },
                {
                    title: "Trust & Credibility",
                    url: "#",
                    icon: TrustCredibility,
                },
                {
                    title: "Psychological Factors",
                    url: "#",
                    icon: PsychologicalFactors,
                },
                {
                    title: "Funnel Diagnosis",
                    url: "#",
                    icon: FunnelDiagnosis,
                },
                {
                    title: "Metrics Diagnosis",
                    url: "#",
                    icon: MetricsDiagnosis,
                },
                {
                    title: "Content Analysis",
                    url: "#",
                    icon: ContentAnalysis,
                },
            ]
        },
        {
            title: "Contacts page",
            url: "#",
            icon: File,
            items: [],
        },
        {
            title: "Services page",
            url: "#",
            icon: File,
            items: []
        }
    ]
}

export function AppSidebar({...props}: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props} style={{borderRight: "none"}}>
            <SidebarHeader className="py-[16px] px-[4px]">
                <TeamSwitcher teams={data.teams} />
            </SidebarHeader>
            <SidebarContent className="pt-0 px-[16px] pb-[8px]">
                <NavMain items={data.navMain} />
                <UXCard></UXCard>
            </SidebarContent>
        </Sidebar>
    )
}
