import contentTopHeaderStyles from "./report-top-header.module.css";
import {Button} from "@/components/ui/button";
import {GitCompare, Monitor, Phone, Share, Smartphone} from "lucide-react";

export default function ReportTopHeader() {
    return (
        <div className={contentTopHeaderStyles.container}>
            <div className={`${contentTopHeaderStyles.leftSection} flex flex-col`}>
                <p className={contentTopHeaderStyles.leftSectionReportDateText}>Report Created on 28 Feb 2025 at 14:35</p>
                <div className='flex items-center gap-2'>
                    <div className={`${contentTopHeaderStyles.leftSectionReportImageContainer} flex items-center justify-center`} >
                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.6621 15.1712C17.2839 15.3893 16.6975 15.406 16.2375 15.2498C15.2684 14.921 14.2068 14.4838 13.2182 13.9118C12.1709 13.3076 11.3834 12.6559 10.8032 12.0708C10.5531 11.8183 10.5852 11.4978 10.9438 11.2905C12.8027 10.2169 15.813 10.2157 17.6683 11.2869C19.5237 12.358 19.521 14.0965 17.6621 15.1688V15.1712Z" fill="#BB2B29"/>
                            <path d="M10.6037 14.9778C10.1579 14.6692 9.19237 14.6382 8.85156 14.9909L5.78516 17.9554L6.2283 18.0829L11.3093 16.4136C11.9269 16.2146 11.8646 15.6451 11.3191 15.3889C11.183 15.3246 11.0504 15.2566 10.924 15.1827C10.811 15.1172 10.7042 15.0493 10.6028 14.979L10.6037 14.9778Z" fill="#BB2B29"/>
                            <path d="M14.6706 15.8084C15.3549 15.7978 15.4501 15.314 14.8913 15.0876C14.2195 14.8148 13.5343 14.493 12.8776 14.1141C12.1791 13.7102 11.5918 13.2884 11.1015 12.8761C10.7153 12.5521 9.87703 12.6021 9.85123 12.9964C9.80229 13.7281 10.2561 14.4644 11.2171 15.0185C12.1639 15.5654 13.4195 15.8287 14.6706 15.8073V15.8084Z" fill="#BB2B29"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M1.76278 1.77177C2.8911 0.637486 4.42164 0 6.01714 0C7.61263 0 9.14405 0.637486 10.275 1.77177C11.4034 2.90615 12.0369 4.44433 12.0369 6.04935C12.0369 6.25312 12.0271 6.45921 12.0076 6.66539C12.0067 6.66913 12.0058 6.67304 12.0049 6.67695C12.004 6.68309 12.0022 6.68932 12.0022 6.6952C11.8759 8.0337 11.0225 9.35441 10.3996 10.3173C10.3578 10.3821 10.3169 10.4454 10.2768 10.5069C10.1611 10.687 9.98229 10.9381 9.76606 11.2423C8.80947 12.5845 7.11609 14.9613 6.84558 16.8458L6.77172 17.4367C6.75126 17.6226 6.66227 17.7942 6.52345 17.9181C6.38464 18.042 6.20578 18.1111 6.0198 18.1111C5.83382 18.1111 5.65408 18.042 5.51615 17.9181C5.37645 17.793 5.28835 17.6226 5.26699 17.4367L5.19314 16.8458C4.91373 14.9001 3.11446 12.3989 2.18101 11.1003C2.00482 10.856 1.85977 10.6543 1.761 10.5069C1.13811 9.57625 0.170842 8.12375 0.0355851 6.6952C0.0338054 6.68559 0.0311424 6.67491 0.0311424 6.66539C0.010676 6.45806 0 6.25312 0 6.04935C0 4.44433 0.634454 2.90615 1.76278 1.77177ZM7.66068 5.21939C8.01662 6.92175 7.24512 8.52374 5.93705 8.79755C4.62897 9.07127 3.27997 7.91313 2.92314 6.21077C2.5672 4.5084 3.3387 2.90641 4.64677 2.6327C5.95484 2.35889 7.30474 3.51703 7.66068 5.21939Z" fill="#BB2B29"/>
                        </svg>
                    </div>
                    <a href="" className={contentTopHeaderStyles.link}>
                        https://uxdrive.io/2025/01/16/how-to-build-a-high-convertin...
                    </a>
                    <Button className={`${contentTopHeaderStyles.compareButton} flex items-center gap-1`}>
                        <GitCompare size={16} className="text-blue-500" /> Compare
                    </Button>
                </div>
            </div>

            <div className={`${contentTopHeaderStyles.rightSection} flex items-center gap-1`}>
                <Button className={`${contentTopHeaderStyles.shareReport} flex items-center gap-2`}>
                    <Share size={18} className="text-blue-500" />
                    Share Report
                </Button>
                <div className={`${contentTopHeaderStyles.viewSwitchContainer} flex items-center`}>
                    <Button variant={"secondary"} className={`${contentTopHeaderStyles.desktopViewButton} flex items-center gap-2`}>
                        <Monitor size={18} className="text-blue-500" />
                        Desktop
                    </Button>
                    <Button disabled={true} className={`${contentTopHeaderStyles.mobileViewButton} flex items-center gap-2`}>
                        <Smartphone size={18} className="text-blue-500" />
                        Mobile
                    </Button>
                </div>
            </div>
        </div>
    );
}
