import React from "react";
import overviewCardStyles from './content-overview-card.module.css'
import {Button} from "@/components/ui/button";
import {ArrowUpRight} from "lucide-react";
import StatusIndicator
    from "@/components/content-main/content-diagnose-overview-card/status-indicator/status-indicator";

interface IContentOverviewCard {
    title: string;
    score: number;
    status: string;
    criticalIssues: number;
}

const ContentOverviewCard: React.FC<IContentOverviewCard> = ({title, score, status, criticalIssues}) => {
    return (
        <div className={overviewCardStyles.container}>
            <div className="flex justify-between">
                <div className={overviewCardStyles.leftSideHeader}>
                    <p className={overviewCardStyles.title}>{title}</p>
                    <p className={overviewCardStyles.subtitle}>Your page usability diagnose is normal</p>
                </div>
                <Button className={overviewCardStyles.button}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M9.00526 6L18 6.00024V15M6 18L17.7111 6.28912" stroke="#0052FF" strokeWidth="1.5"/>
                    </svg>
                </Button>
            </div>
            <div>
                <StatusIndicator value={score}></StatusIndicator>
            </div>
        </div>
    );
};


export default ContentOverviewCard;
