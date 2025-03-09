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
                    <ArrowUpRight size={12} color="#0052FF"/>
                </Button>
            </div>
            <div>
                <StatusIndicator value={score}></StatusIndicator>
            </div>
        </div>
    );
};


export default ContentOverviewCard;
