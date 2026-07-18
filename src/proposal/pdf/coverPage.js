export function addCoverPage(
  doc,
  companyData,
  form,
  logoBase64,
  proposalNumber,
  today
) {

  if (logoBase64) {
    doc.addImage(
      logoBase64,
      "PNG",
      75,
      20,
      60,
      60
    );
  }

  doc.setFontSize(24);
  doc.setTextColor(111,175,0);

  doc.text(
    companyData.name,
    105,
    95,
    { align: "center" }
  );

  doc.setFontSize(14);
  doc.setTextColor(80);

  doc.text(
    companyData.slogan,
    105,
    105,
    { align: "center" }
  );

  doc.setFontSize(28);
  doc.setTextColor(0);

  doc.text(
    "PROJECT PROPOSAL",
    105,
    145,
    { align: "center" }
  );

  doc.setFontSize(14);

  doc.text(
    `Prepared For: ${form.business}`,
    20,
    185
  );

  doc.text(
    `Client: ${form.client}`,
    20,
    198
  );

  doc.text(
    `Proposal #: ${proposalNumber}`,
    20,
    211
  );

  doc.text(
    `Date: ${today}`,
    20,
    224
  );

}