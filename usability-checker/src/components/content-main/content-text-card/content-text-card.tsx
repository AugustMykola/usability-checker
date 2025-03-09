import React from "react";
import contextTextCardStyles from './context-text-card.module.css'

interface CardProps {
    title: string;
    description: string;
    titleFontSize?: string;
    descriptionFontSize?: string;
}

const TextCard: React.FC<CardProps> = ({
                                       title,
                                       description,
                                       titleFontSize = "32px",
                                       descriptionFontSize = "16px"
                                   }) => {
    return (
        <div className={`${contextTextCardStyles.container} flex flex-col gap-3`}>
            <h2
                style={{ fontSize: titleFontSize }}
                className="leading-[36px] font-normal tracking-[0%] text-[#1F2125]">
                {title}
            </h2>
            <p
                style={{ fontSize: descriptionFontSize }}
                className="leading-[24px] font-normal tracking-[0%] text-[#5C5E63]">
                {description}
            </p>
        </div>
    );
};


export default TextCard;
