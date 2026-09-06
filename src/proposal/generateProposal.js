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

    const canvas =
        document.createElement("canvas");

    canvas.width =
        img.naturalWidth || img.width;

    canvas.height =
        img.naturalHeight || img.height;

    const ctx =
        canvas.getContext("2d");

    if (!ctx) {

        throw new Error(
            "Unable to create image canvas."
        );

    }

    ctx.drawImage(
        img,
        0,
        0,
        canvas.width,
        canvas.height
    );

    return canvas.toDataURL(
        "image/png"
    );

}


function generateProposalId() {

    return `PROP-${Date.now()}`;

}


/* ===========================================
   Load Image
=========================================== */

function loadImage(src) {

    return new Promise(
        (resolve, reject) => {

            const image =
                new Image();

            image.onload = () =>
                resolve(image);

            image.onerror = () =>
                reject(
                    new Error(
                        "Unable to load proposal logo."
                    )
                );

            image.src = src;

        }
    );

}


/* ===========================================
   Main Generator
=========================================== */

export async function generateProposal(form) {

    /* ----------------------------------------
       Load jsPDF only when proposal generation
       is requested
    ---------------------------------------- */

    const { default: jsPDF } =
        await import("jspdf");


    const doc =
        new jsPDF();


    const proposalNumber =
        `FTC-${new Date().getFullYear()}-${Math.floor(
            1000 +
            Math.random() * 9000
        )}`;


    const today =
        new Date().toLocaleDateString();


    /* =====================================
       Load Logo
    ===================================== */

    const logoImage =
        await loadImage(logo);

    const logoBase64 =
        getBase64Image(
            logoImage
        );


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

    console.log(
        "Saving Proposal...",
        {
            proposalNumber,

            client:
                form.client,

            business:
                form.business,

            service:
                form.service,

            package:
                form.package,

            amount:
                form.price,
        }
    );


    saveProposal({

        id:
            generateProposalId(),

        proposalNumber,

        client:
            form.client,

        business:
            form.business,

        service:
            form.service,

        package:
            form.package,

        amount:
            form.price,

        timeline:
            form.timeline,

        createdDate:
            today,

        status:
            ProposalStatus.GENERATED,

        formData:
            form,

    });


    /* =====================================
       Download PDF
    ===================================== */

    await exportProposal(
        form.business ||
        "Proposal"
    );

}