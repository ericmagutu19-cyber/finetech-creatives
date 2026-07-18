// Preview Pages
import CoverPage from "./preview/CoverPage";
import ExecutiveSummary from "./preview/ExecutiveSummary";
import ScopeOfWork from "./preview/ScopeOfWork";
import Investment from "./preview/Investment";
import Timeline from "./preview/Timeline";
import WhyChooseUs from "./preview/WhyChooseUs";
import Terms from "./preview/Terms";
import Acceptance from "./preview/Acceptance";

// Styles
import "./styles/proposalLayout.css";
import "./styles/proposalTypography.css";
import "./styles/proposalComponents.css";
import "./styles/proposalPrint.css";

export default function ProposalPreview({ form }) {

    return (

        <div
    id="proposal-preview"
    className="proposal-preview"
>

            <CoverPage form={form} />

            <ExecutiveSummary form={form} />

            <ScopeOfWork form={form} />

            <Investment form={form} />

            <Timeline form={form} />

            <WhyChooseUs form={form} />

            <Terms form={form} />

            <Acceptance form={form} />

        </div>

    );

}