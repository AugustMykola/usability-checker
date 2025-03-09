import Card from "@/components/content-main/content-text-card/content-text-card";
import diagnoseOverviewStyle from './diagnose-overview.module.css'
import ContentOverviewCard from "@/components/content-main/content-diagnose-overview-card/content-overview-card";
import TextCard from "@/components/content-main/content-text-card/content-text-card";
import {ComponentBarChart} from "@/components/content-main/content-bar-chart/bar-cahrt";

const data = [
    {title: "Usability Diagnose", score: 80, status: "Good", criticalIssues: 2},
    {title: "Content Hierarchy", score: 20, status: "Poor", criticalIssues: 12},
    {title: "Page Performance", score: 20, status: "Poor", criticalIssues: 12},
    {title: "Accessibility", score: 80, status: "Good", criticalIssues: 2},
    {title: "Conversion Analysis", score: 80, status: "Good", criticalIssues: 2},
    {title: "Trust & Credibility", score: 80, status: "Good", criticalIssues: 2},
    {title: "Psychological Factors", score: 80, status: "Good", criticalIssues: 2},
    {title: "Funnel Diagnosis", score: 80, status: "Good", criticalIssues: 2},
    {title: "Metrics Diagnosis", score: 80, status: "Good", criticalIssues: 2},
    {title: "Content Analysis", score: 80, status: "Good", criticalIssues: 2},
];

export default function DiagnoseOverview() {
    return (
        <div className={`${diagnoseOverviewStyle.diagnoseOverviewContainer} w-full flex flex-col justify-start items-start`}>
            <TextCard
                title="Overview"
                description="Your page usability diagnose is normal, but implementing the recommendations below will improve it"
                titleFontSize="24px"
                descriptionFontSize="14px"
            />
            <div className="w-full flex">
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-full lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-[1536px]">
                    {data.map((item, index) => (
                        <ContentOverviewCard key={index} {...item} />
                    ))}
                </div>
                <div className={`${diagnoseOverviewStyle.rightSide}`}>
                    <Card
                        title="Issues dominance"
                        description="Analysis for the most critical issues"
                    />
                    <div className={diagnoseOverviewStyle.chartContainer}>
                        <ComponentBarChart></ComponentBarChart>
                    </div>
                    <TextCard
                        title="Trending up by 5.2% this mont"
                        description="Showing total visitors for the last 6 months"
                        titleFontSize="16px"
                        descriptionFontSize="12px"
                    />
                </div>
            </div>
        </div>
    );
}
