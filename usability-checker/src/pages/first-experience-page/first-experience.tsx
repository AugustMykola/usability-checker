import {AppSidebar} from "@/components/side-menu/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar"

export default function FirstExperiencePage() {
    return (
        <div>
            <div className="relative">
                <SidebarProvider defaultOpen={true}>
                    <AppSidebar />
                </SidebarProvider>
            </div>
        </div>
    );
}
