export function addInvestment(
  doc,
  form
) {

  doc.addPage();

  doc.setFontSize(22);
  doc.setTextColor(111,175,0);

  doc.text(
    "Investment",
    20,
    25
  );

  doc.setFontSize(18);

  doc.text(

    `KES ${Number(form.price || 0).toLocaleString()}`,

    20,

    45

  );

  doc.setFontSize(14);

  doc.text(
    "Payment Schedule",
    20,
    65
  );

  let y = 75;

  form.paymentTerms?.forEach(term => {

    doc.text(
      `• ${term}`,
      25,
      y
    );

    y += 8;

  });

  y += 10;

  doc.text(
    `Support: ${form.support}`,
    20,
    y
  );

  y += 10;

  doc.text(
    `Warranty: ${form.warranty}`,
    20,
    y
  );

  y += 10;

  doc.text(
    `Revisions: ${form.revisions}`,
    20,
    y
  );

  y += 10;

  doc.text(
    `Training: ${form.training}`,
    20,
    y
  );

}