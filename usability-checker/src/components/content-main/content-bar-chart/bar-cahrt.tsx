"use client"

import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
    { month: "Usability Diagnouse", desktop: 186, mobile: 80 },
    { month: "Content Hierarchy", desktop: 305, mobile: 200 },
    { month: "Page Performance", desktop: 237, mobile: 120 },
    { month: "Accessibility", desktop: 73, mobile: 190 },
    { month: "Conversion Analysis", desktop: 209, mobile: 130 },
    { month: "Trust & Credibility", desktop: 214, mobile: 140 },
    { month: "Psychological Factors", desktop: 214, mobile: 140 },
    { month: "Funnel Diagnosis", desktop: 214, mobile: 140 },
    { month: "Metrics Diagnosis", desktop: 214, mobile: 140 },
    { month: "Content Analysis", desktop: 214, mobile: 140 }
]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "#DF15181A",
    },
    mobile: {
        label: "Mobile",
        color: "#DF15181A",
    },
    label: {
        color: "#DF15181A",
    },
} satisfies ChartConfig

export function ComponentBarChart() {
    return (
        <ChartContainer  config={chartConfig}>
            <BarChart
                width={328}
                height={450}
                accessibilityLayer
                data={chartData}
                layout="vertical"
                margin={{
                    right: 16,
                }}
            >
                <CartesianGrid horizontal={false} />
                <YAxis
                    dataKey="month"
                    type="category"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                    hide
                />
                <XAxis dataKey="desktop" type="number" hide />
                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="line" />}
                />
                <Bar
                    dataKey="desktop"
                    layout="vertical"
                    fill="var(--color-desktop)"
                    radius={4}
                >
                    <LabelList
                        dataKey="month"
                        position="insideLeft"
                        offset={8}
                        className="fill-black"
                        fontSize={12}
                    />
                    <LabelList
                        dataKey="desktop"
                        position="right"
                        offset={8}
                        className="fill-black"
                        fontSize={12}
                    />
                </Bar>
            </BarChart>
        </ChartContainer>

    )
}
