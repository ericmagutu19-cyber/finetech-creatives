export function addExecutiveSummary(
  doc,
  form,
  companyData
) {

  doc.addPage();

  doc.setFontSize(22);
  doc.setTextColor(111,175,0);

  doc.text(
    "Executive Summary",
    20,
    25
  );

  doc.setFontSize(12);
  doc.setTextColor(0);

  doc.text(

    `Thank you for considering ${companyData.name}.`,

    20,

    45

  );

  doc.text(

    `We appreciate the opportunity to work with ${form.business}.`,

    20,

    58

  );

  doc.text(

    `Based on your requirements, we recommend the ${form.package} package under ${form.service}.`,

    20,

    75,

    { maxWidth: 170 }

  );

}