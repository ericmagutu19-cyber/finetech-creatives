export function addAcceptance(doc) {

  doc.addPage();

  doc.setFontSize(22);
  doc.setTextColor(111,175,0);

  doc.text(
    "Proposal Acceptance",
    20,
    25
  );

  doc.setFontSize(12);
  doc.setTextColor(0);

  doc.text(

    "By signing below, both parties agree to the scope, pricing and terms outlined in this proposal.",

    20,

    45,

    { maxWidth: 170 }

  );

  doc.line(
    20,
    120,
    80,
    120
  );

  doc.text(
    "Client Signature",
    20,
    128
  );

  doc.line(
    120,
    120,
    180,
    120
  );

  doc.text(
    "Date",
    120,
    128
  );

  doc.line(
    20,
    180,
    80,
    180
  );

  doc.text(
    "Fine Tech Creatives",
    20,
    188
  );

}