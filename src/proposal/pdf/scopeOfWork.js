export function addScopeOfWork(
  doc,
  form
) {

  doc.addPage();

  doc.setFontSize(22);
  doc.setTextColor(111,175,0);

  doc.text(
    "Scope of Work",
    20,
    25
  );

  doc.setFontSize(12);
  doc.setTextColor(0);

  doc.text(

    form.description,

    20,

    45,

    { maxWidth: 170 }

  );

  let y = 90;

  doc.setFontSize(16);

  doc.text(
    "Deliverables",
    20,
    y
  );

  y += 12;

  form.deliverables?.forEach(item => {

    doc.text(
      `• ${item}`,
      25,
      y
    );

    y += 8;

  });

  y += 10;

  doc.text(
    `Pages: ${form.pages}`,
    20,
    y
  );

  y += 10;

  doc.text(
    `Timeline: ${form.timeline}`,
    20,
    y
  );

}