"use client"

import {useState, useEffect} from "react"
import {Check, AlertCircle, AlertOctagonIcon, AlertOctagon} from "lucide-react"
import {cn} from "@/lib/utils"
import statusIndicatorStyles from './status-indicator.module.css'

interface StatusIndicatorProps {
    value: number
    maxValue?: number
    size?: number
    strokeWidth?: number
    criticalIssues?: number
    className?: string
}

export default function StatusIndicator({
                                            value,
                                            maxValue = 100,
                                            size = 99,
                                            strokeWidth = 10,
                                            criticalIssues = 5,
                                            className = 'relative'
                                        }: StatusIndicatorProps) {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => {
            setProgress(value)
        }, 100)
        return () => clearTimeout(timer)
    }, [value])

    const radius = (size - strokeWidth) / 2
    const circumference = 2 * Math.PI * radius
    const strokeDashoffset = circumference - (progress / maxValue) * circumference

    return (
        <div className="relative">
            <div
                className={`${statusIndicatorStyles.statusDisplay} flex gap-2 items-center`}>
                <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M11.7524 1.14487C12.0014 1.78921 11.6522 2.23036 10.9762 2.66491C10.4308 3.01553 9.73591 3.39536 8.99964 4.04475C7.62759 5.25488 6.46787 6.71488 5.41968 8.2083C5.22128 8.49098 5.02519 8.77557 4.84008 9.06719C4.60196 9.44394 4.17388 9.67196 3.71486 9.66624C3.25574 9.66051 2.83404 9.42205 2.60623 9.03934C1.88901 7.83441 1.37868 7.53053 1.26325 7.47392C0.642305 7.3816 0.166992 6.86621 0.166992 6.24424C0.166992 5.55698 0.747346 4.99984 1.46325 4.99984C1.96883 5.01851 2.43815 5.21706 2.85473 5.497C3.12081 5.67581 3.40268 5.91229 3.69585 6.22359C4.75057 4.78498 5.90538 3.39413 7.24566 2.21202C8.08563 1.47118 9.05677 0.777711 10.0861 0.411063C10.7573 0.171992 11.5033 0.500528 11.7524 1.14487Z"
                        fill="white"/>
                </svg>
                <p className="font-medium text-[16px] leading-[24px] tracking-normal text-white">Good</p>
            </div>

            <div className={cn("relative inline-flex items-center justify-center", className)}>
                <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="transform -rotate-90">
                    <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#e6e6e6"
                            strokeWidth={strokeWidth}/>

                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        fill="none"
                        stroke="#09C564"
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        style={{
                            transition: "stroke-dashoffset 0.5s ease-in-out",
                        }}
                    />
                </svg>

                <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-normal text-[32px] leading-[36px] tracking-normal align-middle">
            {progress}
              <span className="font-normal text-[14px] leading-[20px] tracking-normal align-middle">/100</span>
          </span>
                </div>
            </div>

            {criticalIssues > 0 && (
                <div className="absolute -bottom-2 right-0 flex items-baseline gap-1 text-red-500">
                    <AlertOctagon className="h-5 w-5"/>
                    <span className="font-bold text-[18px] leading-[28px] tracking-normal">{criticalIssues}</span>
                    <span className="font-medium text-[14px] leading-[20px] tracking-normal align-middle">Critical issues</span>
                </div>
            )}
        </div>
    )
}

