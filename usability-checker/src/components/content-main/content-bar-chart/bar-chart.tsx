import { Card } from "@/components/ui/card"

interface DiagnosticItem {
    label: string
    score: number
    severity: "high" | "medium" | "low"
}

const diagnosticItems: DiagnosticItem[] = [
    { label: "Usability Diagnouse", score: 22, severity: "high" },
    { label: "Content Hierarchy", score: 18, severity: "high" },
    { label: "Page Performance", score: 17, severity: "high" },
    { label: "Accessibility", score: 15, severity: "high" },
    { label: "Conversion Analysis", score: 13, severity: "high" },
    { label: "Trust & Credibility", score: 12, severity: "high" },
    { label: "Psychological Factors", score: 7, severity: "medium" },
    { label: "Funnel Diagnosis", score: 3, severity: "low" },
    { label: "Metrics Diagnosis", score: 3, severity: "low" },
    { label: "Content Analysis", score: 3, severity: "low" },
]

export default function BarChart() {
    return (
        <div className="w-full max-w-md space-y-2 p-4">
            {diagnosticItems.map((item, index) => (
                <Card
                    key={index}
                    className="flex items-center justify-between p-4 bg-red-50/80 hover:bg-red-50 transition-colors"
                >
                    <span className="text-gray-900 font-medium">{item.label}</span>
                    <div className="flex items-center gap-2">
                        <div
                            className={`flex items-center justify-center w-6 h-6 rounded-full ${
                                item.severity === "high" ? "bg-red-500" : item.severity === "medium" ? "bg-orange-400" : "bg-orange-300"
                            }`}
                        >
                            <span className="text-white text-sm font-medium">{item.score}</span>
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    )
}

