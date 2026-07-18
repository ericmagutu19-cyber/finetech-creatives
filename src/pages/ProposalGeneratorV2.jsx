import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import ProposalForm from "../proposal/components/ProposalForm";
import ProposalPreview from "../proposal/ProposalPreview";

import { generateProposal } from "../proposal/generateProposal";
import { serviceTemplates } from "../data/services";

import "../proposal/styles/proposalForm.css";
import "../proposal/styles/proposalLayout.css";
import "../proposal/styles/proposalTypography.css";
import "../proposal/styles/proposalComponents.css";

export default function ProposalGeneratorV2() {
  const location = useLocation();
const lead = location.state?.lead;
console.log("Lead service:", lead?.service);
console.log("Location state:", location.state);
console.log("Lead:", lead);

console.log("Lead received:", lead);
  const [form, setForm] = useState({

  client: "",

  business: "",

  service: "",

  package: "",

  price: "",

  timeline: "",

  description: "",

  highlights: [],

  deliverables: [],

  paymentTerms: [],

  support: "",

  warranty: "",

  revisions: "",

  training: "",

  recommendedFor: "",

  optionalAddons: [],

  pages: ""

});
  const serviceMap = {
  "Website Design": "Website Solutions",
  "SEO": "Search Visibility",
  "Google Business": "Google Business Profile",
  "Branding": "Brand Identity",
  "Marketing": "Social Media Marketing",
  "Lead Generation": "Business Growth Packages",
};

useEffect(() => {
  if (!lead) return;

  const mappedService =
    serviceMap[lead.service] || lead.service;

  const service = serviceTemplates[mappedService];

  setForm((prev) => ({
    ...prev,
    client: lead.name || "",
    business: lead.business || "",
    service: mappedService,
    description: service?.description || "",
    highlights: service?.highlights || [],
  }));

}, [lead]);

  const generatePDF = async () => {

  await generateProposal(form);

};
console.log(form);
  return (

    <div className="proposal-layout">

      <ProposalForm

        form={form}

        setForm={setForm}

        generatePDF={generatePDF}

      />

      <ProposalPreview

        form={form}

      />

    </div>

  );

}