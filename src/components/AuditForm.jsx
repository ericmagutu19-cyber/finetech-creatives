import { useState } from "react";
import { trackEvent } from "../utils/analytics";
import Toast from "./shared/Toast";

export default function AuditForm() {
const [formData, setFormData] = useState({

    name: "",

    business: "",

    email: "",

    countryCode: "+254",

    phone: "",

    instagram: "",

    service: "",

    message: ""

});
  const [submitted, setSubmitted] = useState(false);
  const [toast, setToast] = useState({

    show:false,

    type:"success",

    message:""

});
  const phoneValid = formData.phone.length === 9;

 const handleChange = (e) => {

    const { name, value } = e.target;

    if (name === "phone") {

        const cleaned = value.replace(/\D/g, "");

        if (cleaned.length <= 9) {

            setFormData({

                ...formData,

                phone: cleaned

            });

        }

        return;

    }

    setFormData({

        ...formData,

        [name]: value

    });

};

const handleSubmit = async (e) => {
  e.preventDefault();
  if (!phoneValid) {

    setToast({

        show: true,

        type: "error",

        message: "Phone number must contain exactly 9 digits."

    });

    setTimeout(() => {

        setToast({

            show: false,

            type: "",

            message: ""

        });

    }, 3000);

    return;

}

  try {

    await fetch(
      "https://script.google.com/macros/s/AKfycbz_loyVk8KGQNVLxEO8boE6xb-5ydeoJghnIgOPvaXgsTQ34vI39X0z1Y3GEsPst7TQ/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({

           action: "newLead",

    ...formData,

    phone:

        formData.countryCode +

        formData.phone

}),
      }
    );

    const whatsappMessage = `
Hello Fine Tech Creatives,

I would like a FREE Growth Audit.

Name: ${formData.name}

Business: ${formData.business}

Email: ${formData.email}

Phone:

${formData.countryCode}${formData.phone}

Instagram: ${formData.instagram}

Service Requested: ${formData.service}

Business Details:
${formData.message}
    `;

    const encodedMessage =
      encodeURIComponent(whatsappMessage);


setFormData({

    name: "",

    business: "",

    email: "",

    countryCode: "+254",

    phone: "",

    instagram: "",

    service: "",

    message: ""

});

setToast({

    show: true,

    type: "success",

    message: "Audit request submitted successfully."

});
trackEvent(

    "Audit Request",

    "Lead Generated",

    formData.service

);
setTimeout(() => {

    setToast({

        show: false,

        type: "",

        message: ""

    });

},3000);
    setTimeout(() => {
  window.open(
    `https://wa.me/254101709129?text=${encodedMessage}`,
    "_blank"
  );
}, 1000);

  } catch (error) {
    console.error(error);

    setToast({

    show:true,

    type:"error",

    message:"Something went wrong. Please try again."

});

setTimeout(()=>{

    setToast({

        show:false

    });

},3000);
  }
};
  return (
    <section id="audit" className="section">
      <Toast

    show={toast.show}

    type={toast.type}

    message={toast.message}

      />
      <div className="container">

        <h2
          style={{
            textAlign: "center",
            fontSize: "3rem",
            marginBottom: "20px",
          }}
        >
          Get Your Free Growth Audit
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#aaa",
            marginBottom: "50px",
          }}
        >
          Discover how your business can attract
          more customers online.
        </p>

        <form
          onSubmit={handleSubmit}
          className="audit-form"
        >
          <input
  type="text"
  name="name"
  placeholder="Full Name"
  value={formData.name}
  onChange={handleChange}
/>

          <input
            type="text"
            name="business"
            placeholder="Business Name"
            value={formData.business}
            onChange={handleChange}
            required
          />
            <input
  type="email"
  name="email"
  placeholder="Email Address"
  value={formData.email}
  onChange={handleChange}
  required
/>
          <div className="phone-group">

    <select

        name="countryCode"

        value={formData.countryCode}

        onChange={handleChange}

    >

        <option value="+254">
            🇰🇪 +254
        </option>

        <option value="+255">
            🇹🇿 +255
        </option>

        <option value="+256">
            🇺🇬 +256
        </option>

        <option value="+250">
            🇷🇼 +250
        </option>

        <option value="+1">
            🇺🇸 +1
        </option>

        <option value="+44">
            🇬🇧 +44
        </option>

    </select>

    <input

        type="tel"

        name="phone"

        placeholder="712345678"

        value={formData.phone}

        onChange={handleChange}

        required

    />

</div>

{formData.phone && !phoneValid ? (

  <small className="error-text">

    Phone number must contain exactly 9 digits.

  </small>

) : (

  <small className="phone-helper">

    Example: +254 712345678

  </small>

)}

          <input
            type="text"
            name="instagram"
            placeholder="Instagram Page"
            value={formData.instagram}
            onChange={handleChange}
          />
           <select
  name="service"
  value={formData.service}
  onChange={handleChange}
  className="form-input"
  required
>
  <option value="">
    Select Service
  </option>

  <option value="Website Design">
    Website Design
  </option>

  <option value="SEO & Google Visibility">
    SEO & Google Visibility
  </option>

  <option value="Branding & Logo Design">
    Branding & Logo Design
  </option>

  <option value="Social Media Marketing">
    Social Media Marketing
  </option>

  <option value="E-Commerce Website">
    E-Commerce Website
  </option>

  <option value="Complete Growth Package">
    Complete Growth Package
  </option>
</select> 
          
          <textarea
            name="message"
            rows="6"
            placeholder="Tell us about your business"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button
            type="submit"
            className="btn-primary"
            style={{
              width: "100%",
            }}
          >
            Request Free Audit
          </button>

          <p
  style={{
    textAlign: "center",
    color: "#888",
    marginTop: "15px",
  }}
>
  Response time: Usually within 30 minutes
</p>

        </form>

      </div>
    </section>
  );
}