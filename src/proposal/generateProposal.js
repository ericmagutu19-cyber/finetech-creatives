import jsPDF from "jspdf";

import logo from "../assets/finetech-logo.png";

import { companyData } from "../config/companyData";
import { serviceTemplates } from "../data/services";

import { addCoverPage } from "./pdf/coverPage";
import { addExecutiveSummary } from "./pdf/executiveSummary";
import { addScopeOfWork } from "./pdf/scopeOfWork";
import { addInvestment } from "./pdf/investment";
import { addTimeline } from "./pdf/timeline";
import { addWhyUs } from "./pdf/whyChooseUs";
import { addTerms } from "./pdf/terms";
import { addAcceptance } from "./pdf/acceptance";

import { saveProposal } from "./proposalStorage";
import { ProposalStatus } from "./proposalStatus";
import { exportProposal } from "./exportProposal";

/* ===========================================
   Helpers
=========================================== */

function getBase64Image(img) {

    const canvas = document.createElement("canvas");

    canvas.width = img.width;
    canvas.height = img.height;

    const ctx = canvas.getContext("2d");

    ctx.drawImage(img, 0, 0);

    return canvas.toDataURL("image/png");

}

function generateProposalId() {

    return "PROP-" + Date.now();

}

/* ===========================================
   Main Generator
=========================================== */

export async function generateProposal(form) {

    const doc = new jsPDF();

    const proposalNumber =
        "FTC-" +
        new Date().getFullYear() +
        "-" +
        Math.floor(1000 + Math.random() * 9000);

    const today = new Date().toLocaleDateString();

    // Load Logo

    const logoImage = new Image();

    logoImage.src = logo;

    await new Promise((resolve) => {

        logoImage.onload = resolve;

    });

    const logoBase64 = getBase64Image(logoImage);

    /* =====================================
       PDF Pages
    ===================================== */

    addCoverPage(
        doc,
        companyData,
        form,
        logoBase64,
        proposalNumber,
        today
    );

    addExecutiveSummary(
        doc,
        form,
        companyData
    );

    addScopeOfWork(
        doc,
        form,
        serviceTemplates
    );

    addInvestment(
        doc,
        form
    );

    addTimeline(
        doc,
        form
    );

    addWhyUs(
        doc
    );

    addTerms(
        doc
    );

    addAcceptance(
        doc
    );

    /* =====================================
       Save Proposal History
    ===================================== */

    console.log("Saving Proposal...", {

        proposalNumber,

        client: form.client,

        business: form.business,

        service: form.service,

        package: form.package,

        amount: form.price

    });

    saveProposal({

        id: generateProposalId(),

        proposalNumber,

        client: form.client,

        business: form.business,

        service: form.service,

        package: form.package,

        amount: form.price,

        timeline: form.timeline,

        createdDate: today,

        status: ProposalStatus.GENERATED,

        formData: form

    });

    /* =====================================
       Download PDF
    ===================================== */

    await exportProposal(
    form.business || "Proposal"
);

}