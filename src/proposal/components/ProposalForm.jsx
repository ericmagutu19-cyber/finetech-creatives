import { serviceTemplates } from "../../data/services";

export default function ProposalForm({
  form,
  setForm,
  generatePDF,
}) {

  const updateService = (serviceName) => {

    const service = serviceTemplates[serviceName];

    setForm({
      ...form,
      service: serviceName,
      package: "",
      price: "",
      timeline: "",
      description: service.description,
      highlights: [],
    });

  };

  const updatePackage = (packageName) => {

  const service = serviceTemplates[form.service];

  const pkg = service.packages[packageName];

  setForm({

    ...form,

    package: packageName,

    price: pkg.price,

    timeline: pkg.timeline,

    description: service.description,

    highlights: service.highlights,

    deliverables: pkg.deliverables || [],

    paymentTerms: pkg.paymentTerms || [],

    support: pkg.support || "",

    warranty: pkg.warranty || "",

    revisions: pkg.revisions || "",

    training: pkg.training || "",

    recommendedFor: pkg.recommendedFor || "",

    optionalAddons: pkg.optionalAddons || [],

    pages: pkg.pages || ""

  });

};

  return (

    <div className="proposal-form">

      <h2>Proposal Generator</h2>

      <label>Client Name</label>

      <input
        type="text"
        value={form.client}
        onChange={(e)=>
          setForm({
            ...form,
            client:e.target.value
          })
        }
      />

      <label>Business Name</label>

      <input
        type="text"
        value={form.business}
        onChange={(e)=>
          setForm({
            ...form,
            business:e.target.value
          })
        }
      />

      <label>Select Service</label>

      <select
        value={form.service}
        onChange={(e)=>
          updateService(e.target.value)
        }
      >

        <option value="">
          Choose Service
        </option>

        {Object.keys(serviceTemplates).map(service=>(

          <option
            key={service}
            value={service}
          >
            {service}
          </option>

        ))}

      </select>

      {form.service &&
 serviceTemplates[form.service] && (

<>
  <label>Select Package</label>

  <select
    value={form.package}
    onChange={(e)=>
      updatePackage(e.target.value)
    }
  >

    <option value="">
      Choose Package
    </option>

    {Object.keys(
      serviceTemplates[form.service].packages
    ).map((pkg)=>(

      <option
        key={pkg}
        value={pkg}
      >
        {pkg}
      </option>

    ))}

  </select>

</>
)}

      <label>Investment</label>

      <input
        readOnly
        value={
          form.price
            ? `KES ${Number(form.price).toLocaleString()}`
            : ""
        }
      />

      <label>Timeline</label>

      <input
        readOnly
        value={form.timeline}
      />

      <label>Project Description</label>

      <textarea
        rows={6}
        readOnly
        value={form.description}
      />

      <button
        className="generate-btn"
        onClick={generatePDF}
      >
        Generate Proposal PDF
      </button>

    </div>

  );

}