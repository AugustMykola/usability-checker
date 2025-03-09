import reportContentStyles from './report-content.module.css'
import UsabilityDiagnose from "@/components/content-main/usability-diagnose/usability-diagnose";
import DiagnoseOverview from "@/components/content-main/diagnose-overview/diagnose-overview";
export default function ReportContent() {
    return (
        <div className={`${reportContentStyles.reportContentContainer} flex flex-col items-center justify-center`}>
            <UsabilityDiagnose></UsabilityDiagnose>
            <DiagnoseOverview></DiagnoseOverview>
        </div>
    );
}
