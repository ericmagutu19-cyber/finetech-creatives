export function addTerms(doc) {

  doc.addPage();

  doc.setFontSize(22);
  doc.setTextColor(111,175,0);

  doc.text(
    "Terms & Conditions",
    20,
    25
  );

  doc.setFontSize(12);
  doc.setTextColor(0);

  const terms = [

    "Project commences after agreed deposit.",

    "Project timelines depend on client approvals.",

    "Additional work outside agreed scope may incur additional charges.",

    "Final ownership transfers after full payment.",

    "All client information remains confidential.",

    "Support is limited to agreed package."

  ];

  let y = 45;

  terms.forEach(term => {

    doc.text(
      `• ${term}`,
      20,
      y
    );

    y += 12;

  });

}