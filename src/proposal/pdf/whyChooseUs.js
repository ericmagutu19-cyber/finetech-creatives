export function addWhyUs(doc) {

    doc.addPage();

    const green = [111, 175, 0];

    // Heading
    doc.setFont("helvetica", "bold");
    doc.setFontSize(24);
    doc.setTextColor(...green);

    doc.text("Why Choose Fine Tech Creatives?", 20, 28);

    doc.setDrawColor(...green);
    doc.line(20, 33, 110, 33);

    // Introduction
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.setTextColor(70);

    const intro = doc.splitTextToSize(
        "Fine Tech Creatives delivers modern digital solutions that help businesses increase visibility, build credibility and achieve sustainable growth.",
        170
    );

    doc.text(intro, 20, 48);

    const reasons = [

        [
            "Business-Driven Solutions",
            "Every project is designed to generate enquiries and support measurable business growth."
        ],

        [
            "Professional Design",
            "Modern, responsive and visually appealing designs that build customer trust."
        ],

        [
            "SEO Optimized",
            "Our websites are developed following search engine optimization best practices."
        ],

        [
            "Reliable Delivery",
            "Structured workflows ensure projects are delivered on time without compromising quality."
        ],

        [
            "Training & Support",
            "We continue supporting our clients after project delivery."
        ],

        [
            "Long-Term Partnership",
            "Our goal is to become your trusted digital technology partner."
        ]

    ];

    let y = 75;

    reasons.forEach(([title, body]) => {

        doc.setFillColor(...green);
        doc.circle(24, y - 2, 2, "F");

        doc.setFont("helvetica", "bold");
        doc.setFontSize(13);
        doc.setTextColor(35);

        doc.text(title, 32, y);

        doc.setFont("helvetica", "normal");
        doc.setFontSize(11);
        doc.setTextColor(90);

        const lines = doc.splitTextToSize(body, 155);

        doc.text(lines, 32, y + 7);

        y += 30;

    });

    doc.setDrawColor(220);
    doc.line(20, 245, 190, 245);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(15);
    doc.setTextColor(...green);

    doc.text(
        "Helping Businesses Get Found • Get Chosen • Grow",
        20,
        258
    );

    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.setTextColor(90);

    doc.text(
        "Fine Tech Creatives | Professional Digital Solutions",
        20,
        266
    );

}