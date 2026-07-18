import { companyData } from "../config/companyData";

export function addHeader(doc, proposalNumber) {

    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(111,175,0);

    doc.text(
        companyData.name,
        20,
        12
    );

    doc.setFont("helvetica","normal");

    doc.setTextColor(120);

    doc.text(

        `Proposal No: ${proposalNumber}`,

        150,

        12

    );

    doc.setDrawColor(220);

    doc.line(
        20,
        16,
        190,
        16
    );

}

export function addFooter(doc,page,totalPages){

    doc.setDrawColor(220);

    doc.line(
        20,
        285,
        190,
        285
    );

    doc.setFontSize(9);

    doc.setTextColor(120);

    doc.text(

        "Fine Tech Creatives",

        20,

        291

    );

    doc.text(

        companyData.website,

        70,

        291

    );

    doc.text(

        `Page ${page} of ${totalPages}`,

        170,

        291,

        {
            align:"right"
        }

    );

}