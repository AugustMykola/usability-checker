import {AppSidebar} from "@/components/side-menu/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar"
import firstExperiencePageStyles from './first-experience.module.css'
import ReportTopHeader from "@/components/content-top-header/report-top-header";
import ReportContent from "@/components/content-main/report-content";

export default function FirstExperiencePage() {
    return (
        <div className="flex">
            <div className="relative">
                <SidebarProvider defaultOpen={true}>
                    <AppSidebar />
                </SidebarProvider>
            </div>
            <div className={`${firstExperiencePageStyles.reportContentContainer} relative`}>
                <ReportTopHeader></ReportTopHeader>
                <ReportContent></ReportContent>
            </div>
        </div>
    );
}
