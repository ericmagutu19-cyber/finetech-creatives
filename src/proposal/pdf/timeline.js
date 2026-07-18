export function addTimeline(doc, form) {

    doc.addPage();

    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.setTextColor(111,175,0);

    doc.text("Project Timeline",20,30);

    doc.setFont("helvetica","normal");
    doc.setFontSize(12);
    doc.setTextColor(80);

    doc.text(
        "The project will be delivered in the following phases:",
        20,
        45
    );

    const phases = [

        ["Discovery & Planning","Day 1"],
        ["Design","20%"],
        ["Development","60%"],
        ["Testing & Review","80%"],
        ["Deployment","100%"]

    ];

    let y = 70;

    phases.forEach(([title,stage],index)=>{

        doc.setFillColor(111,175,0);

        doc.circle(25,y-2,2,"F");

        doc.setFont("helvetica","bold");

        doc.text(title,35,y);

        doc.setFont("helvetica","normal");

        doc.text(stage,160,y);

        y += 28;

    });

    doc.setFont("helvetica","bold");
    doc.setTextColor(111,175,0);

    doc.text(
        `Estimated Completion: ${form.timeline || "--"}`,
        20,
        240
    );

}