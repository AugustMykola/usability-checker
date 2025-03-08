import {AppSidebar} from "@/components/side-menu/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar"
import firstExperiencePageStyle from './first-experience.module.css'

export default function FirstExperiencePage({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <div className="relative">
                <SidebarProvider defaultOpen={true}>
                    <AppSidebar />
                    <div>
                        {children}
                    </div>
                </SidebarProvider>
            </div>
        </div>
    );
}
