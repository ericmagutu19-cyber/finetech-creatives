import { useState } from "react";
import { jsPDF } from "jspdf";
import logo from "../assets/finetech-logo.png";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import { serviceTemplates } from "../data/services";
import { companyData } from "../config/companyData";

export default function ProposalGenerator() {
    const [authenticated,
  setAuthenticated] =
  useState(
    sessionStorage.getItem(
      "adminAuth"
    ) === "true"
  );
    const [searchParams] =
  useSearchParams();
  const [form, setForm] = useState({
  client:
    searchParams.get("client") || "",

  business:
    searchParams.get("business") || "",

  service:
    searchParams.get("service") || "",

  price: "",
  timeline: "",
  description: "",
});
const [proposalSaved,
  setProposalSaved] =
  useState(false);
  useEffect(() => {

  const login = async () => {

    if (authenticated) return;

    const password = prompt(
      "Enter Admin Password"
    );

    const response =
      await fetch(
        "https://script.google.com/macros/s/AKfycbz_loyVk8KGQNVLxEO8boE6xb-5ydeoJghnIgOPvaXgsTQ34vI39X0z1Y3GEsPst7TQ/exec",
        {
          method: "POST",

          body: JSON.stringify({
            action:
              "adminLogin",

            password,
          }),
        }
      );

    const result =
      await response.json();

    if (result.success) {

      sessionStorage.setItem(
        "adminAuth",
        "true"
      );

      setAuthenticated(true);

    } else {

      alert(
        "Invalid Password"
      );

      window.location.href = "/";
    }
  };

  login();

}, []);
useEffect(() => {

  if (
    form.service &&
    serviceTemplates[form.service]
  ) {
    setForm(prev => ({
      ...prev,

      price:
        serviceTemplates[
          form.service
        ].price,

      timeline:
        serviceTemplates[
          form.service
        ].timeline,

      description:
        serviceTemplates[
          form.service
        ].description,
    }));
  }

}, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  
  const getBase64Image = (img) => {
  const canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;

  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);

  return canvas.toDataURL("image/png");
};
    
 const generatePDF = async () => {
    const logoImage = new Image();
logoImage.src = logo;

await new Promise((resolve) => {
  logoImage.onload = resolve;
});

const logoBase64 =
  getBase64Image(logoImage);
    const proposalNumber =
  companyData.proposalPrefix +
  "-" +
  new Date().getFullYear() +
  "-" +
  Math.floor(
    1000 + Math.random() * 9000
  );

const today =
  new Date().toLocaleDateString();
    const doc = new jsPDF();
// COVER PAGE

doc.setFillColor(5, 5, 5);
doc.rect(0, 0, 210, 297, "F");

// Large Logo Centered
doc.addImage(
  logoBase64,
  "PNG",
  75,
  25,
  60,
  60
);

// Brand Name
doc.setTextColor(200, 255, 0);

doc.setFontSize(26);

doc.text(
  companyData.name,
  105,
  105,
  { align: "center" }
);

// Proposal Title
doc.setTextColor(255, 255, 255);

doc.setFontSize(18);

doc.text(
  "PROJECT PROPOSAL",
  105,
  122,
  { align: "center" }
);

// Divider Line
doc.setDrawColor(200, 255, 0);

doc.line(60, 135, 150, 135);

// Prepared For
doc.setFontSize(12);

doc.setTextColor(180, 180, 180);

doc.text(
  "PREPARED FOR",
  105,
  155,
  { align: "center" }
);

// Business Name
doc.setFontSize(22);

doc.setTextColor(255, 255, 255);

doc.text(
  form.business.toUpperCase(),
  105,
  172,
  { align: "center" }
);

// Client Name
doc.setFontSize(13);

doc.setTextColor(200, 200, 200);

doc.text(
  `Client: ${form.client}`,
  105,
  188,
  { align: "center" }
);

// Proposal Number
doc.setFontSize(11);

doc.text(
  `Proposal #: ${proposalNumber}`,
  105,
  220,
  { align: "center" }
);

// Date
doc.text(
  today,
  105,
  230,
  { align: "center" }
);

// Tagline
doc.setFontSize(12);

doc.setTextColor(200, 255, 0);

doc.text(
  companyData.slogan,
  105,
  270,
  { align: "center" }
);

doc.addPage();
doc.setTextColor(0, 0, 0);
// Logo

doc.addImage(
  logoBase64,
  "PNG",
  15,
  10,
  20,
  20
);

// Proposal Number

doc.setFontSize(11);

doc.setTextColor(80, 80, 80);

doc.text(
  `Proposal #: ${proposalNumber}`,
  140,
  18
);

doc.text(
  `Date: ${today}`,
  140,
  26
);

// Divider

doc.setDrawColor(180, 180, 180);

doc.setFontSize(10);

doc.line(20, 275, 190, 275);

doc.text(
  companyData.name,
  20,
  283
);

doc.text(
  `WhatsApp: ${companyData.phone}`,
  80,
  283
);

doc.text(
  companyData.email,
  145,
  283
);
doc.setFontSize(16);
doc.setFontSize(10);

doc.line(
  15,
  38,
  195,
  38
);

doc.setFontSize(14);
doc.setTextColor(200, 255, 0);
doc.text("CLIENT INFORMATION", 20, 50);
doc.setDrawColor(200, 255, 0);

doc.line(20, 53, 78, 53);
doc.setTextColor(0, 0, 0);
doc.setFontSize(11);

doc.text(`Client: ${form.client}`, 20, 62);
doc.text(`Business: ${form.business}`, 20, 70);

doc.line(20, 100, 190, 100);

doc.setFontSize(14);
doc.setTextColor(200, 255, 0);

doc.text("PROJECT DETAILS", 20, 115);
doc.setDrawColor(200, 255, 0);

doc.line(20, 118, 72, 118);
doc.setTextColor(0, 0, 0);
doc.setFontSize(11);

doc.setFontSize(11);
doc.text(`Service: ${form.service}`, 20, 127);
doc.text(`Timeline: ${form.timeline}`, 20, 135);

doc.line(20, 145, 190, 145);

doc.setFontSize(14);
doc.setTextColor(200, 255, 0);

doc.text("PROJECT DESCRIPTION", 20, 160);
doc.setDrawColor(200, 255, 0);

doc.line(20, 163, 92, 163);
doc.setTextColor(0, 0, 0);
doc.setFontSize(11);

const descriptionLines =
  doc.splitTextToSize(
    form.description,
    160
  );

doc.setFontSize(11);
doc.text(descriptionLines, 20, 172);
let y = 190;

doc.setFontSize(14);
doc.setTextColor(200,255,0);

doc.text(
  "WHAT'S INCLUDED",
  20,
  y
);

doc.line(20, y+3, 78, y+3);

y += 12;

doc.setFontSize(11);
doc.setTextColor(0,0,0);

serviceTemplates[
  form.service
].includes.forEach(item=>{

  doc.text(
    `• ${item}`,
    25,
    y
  );

  y += 8;

});

doc.line(20, 205, 190, 205);
doc.setFontSize(14);
doc.setTextColor(200, 255, 0);

y += 10;

doc.setFontSize(14);
doc.setTextColor(200,255,0);

doc.text(
  "INVESTMENT",
  20,
  y
);

doc.line(20,y+3,58,y+3);

y += 15;

doc.roundedRect(
  20,
  y,
  170,
  22,
  4,
  4
);

doc.text(
  "Investment Required",
  25,
  y+13
);

doc.setFont("helvetica","bold");
doc.setFontSize(16);

doc.text(
  `KES ${Number(serviceTemplates[
    form.service
  ].price).toLocaleString()}`,
  125,
  y+13
);

doc.setFont("helvetica","normal");
doc.setFontSize(16);

doc.text(
  `KES ${form.price}`,
  130,
  245
);

doc.setFont("helvetica", "normal");
doc.setFontSize(10);
doc.setFontSize(11);

doc.text(
  "Proposal Validity",
  20,
  266
);

doc.setFontSize(10);

doc.text(
  `This quotation remains valid for ${companyData.proposalValidity} from the proposal date.`,
  20,
  272
);doc.addPage();

doc.setFontSize(16);
doc.text("TERMS & CONDITIONS", 20, 30);

doc.setFontSize(11);

const terms = [
  "1. Project commences after approval.",
  "2. Timelines depend on client feedback.",
  "3. Final files are delivered after payment completion.",
  "4. Additional revisions may attract extra charges.",
  "5. Fine Tech Creatives reserves the right to showcase completed work in its portfolio."
];

doc.text(terms, 20, 50);

doc.setFontSize(14);
doc.text("CLIENT ACCEPTANCE", 20, 120);

doc.setFontSize(11);
doc.text(
  "Client Signature: ____________________",
  20,
  145
);

doc.text(
  "Date: ____________________",
  20,
  160
);

doc.setFontSize(12);
doc.text(
  "Helping Businesses Get Found, Get Chosen & Grow",
  20,
  240
);

doc.save(
  `${form.business || "proposal"}-proposal.pdf`
);
setForm({
  client: "",
  business: "",
  service: "",
  price: "",
  timeline: "",
  description: "",
});
const response = await fetch(
  "https://script.google.com/macros/s/AKfycbz_loyVk8KGQNVLxEO8boE6xb-5ydeoJghnIgOPvaXgsTQ34vI39X0z1Y3GEsPst7TQ/exec",
  {
    method: "POST",
    body: JSON.stringify({
      action: "proposalGenerated",
      name: form.client,
      business: form.business,
      proposalNumber,
      proposalDate: today,
    }),
  }
);

const result = await response.json();

if (result.success) {
  setProposalSaved(true);
}
};
 if (!authenticated) {

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
      }}
    >
      Authenticating...
    </div>
  );

}
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "50px auto",
        padding: "20px",
      }}
    >
      <AdminNavbar />

      <input
  className="form-input"
  placeholder="Client Name"
  name="client"
  value={form.client}
  onChange={handleChange}
/>

<input
  className="form-input"
  placeholder="Business Name"
  name="business"
  value={form.business}
  onChange={handleChange}
/>

      <select
  className="form-input"
  name="service"
  value={form.service}
  onChange={(e) => {
  const service = e.target.value;

  setForm({
    ...form,
    service,
    price:
      serviceTemplates[service]?.price || "",
    timeline:
      serviceTemplates[service]?.timeline || "",
    description:
      serviceTemplates[service]?.description || "",
  });
}}
>
  <option value="">
    Select Service
  </option>

  <option>Website Design</option>

  <option>E-Commerce Website</option>

  <option>SEO & Google Visibility</option>

  <option>Branding & Logo Design</option>

  <option>Social Media Marketing</option>

  <option>Complete Growth Package</option>
</select>

     {form.service && (
  <div
    style={{
      background: "#111",
      border: "1px solid #222",
      borderRadius: "15px",
      padding: "25px",
      marginTop: "20px",
    }}
  >
    <h3 style={{ marginBottom: "15px" }}>
      Proposal Summary
    </h3>

    <p>
      <strong>Price:</strong> KES {form.price}
    </p>

    <p>
      <strong>Timeline:</strong> {form.timeline}
    </p>

    <p>
      <strong>Description:</strong>
    </p>

    <p>{form.description}</p>
  </div>
)}

      <button
        className="btn-primary"
        onClick={generatePDF}
      >
        Generate Proposal PDF
      </button>
      {proposalSaved && (
  <p
    style={{
      color: "#C8FF00",
      marginTop: "15px",
    }}
  >
    ✓ Proposal saved and status updated to Proposal Sent
  </p>
)}
    </div>
  );
}