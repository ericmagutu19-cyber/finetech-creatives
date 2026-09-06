export async function exportProposal(fileName = "Proposal") {

    /* ----------------------------------------------
       Load heavy libraries ONLY when exporting
    ---------------------------------------------- */

    const [
        { default: html2canvas },
        { default: jsPDF },
    ] = await Promise.all([
        import("html2canvas"),
        import("jspdf"),
    ]);

    const pages =
        document.querySelectorAll(".proposal-page");

    if (!pages.length) return;

    const pdf =
        new jsPDF("p", "mm", "a4");

    for (let i = 0; i < pages.length; i++) {

        const canvas = await html2canvas(
            pages[i],
            {
                scale: 2,
                useCORS: true,
                backgroundColor: "#ffffff",
            }
        );

        const imgData =
            canvas.toDataURL("image/jpeg", 0.85);

        const pageWidth = 210;

        const pageHeight = 297;

        if (i !== 0) {

            pdf.addPage();

        }

        pdf.addImage(
            imgData,
            "JPEG",
            0,
            0,
            pageWidth,
            pageHeight,
            undefined,
            "FAST"
        );

    }

    pdf.save(`${fileName}.pdf`);

}