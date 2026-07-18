export function addHeader(
  doc,
  logoBase64,
  companyData,
  proposalNumber,
  today
) {

  doc.addImage(
    logoBase64,
    "PNG",
    15,
    10,
    18,
    18
  );

  doc.setFontSize(10);

  doc.setTextColor(90);

  doc.text(
    companyData.name,
    38,
    18
  );

  doc.text(
    `Proposal #: ${proposalNumber}`,
    145,
    18
  );

  doc.text(
    today,
    145,
    25
  );

  doc.setDrawColor(210);

  doc.line(
    15,
    35,
    195,
    35
  );

}