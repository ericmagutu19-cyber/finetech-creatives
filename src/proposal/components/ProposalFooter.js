export function addFooter(
  doc,
  companyData
){

  doc.setDrawColor(220);

  doc.line(
    15,
    280,
    195,
    280
  );

  doc.setFontSize(9);

  doc.setTextColor(120);

  doc.text(
    companyData.name,
    20,
    287
  );

  doc.text(
    companyData.phone,
    90,
    287
  );

  doc.text(
    companyData.email,
    145,
    287
  );

}