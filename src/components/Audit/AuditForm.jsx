import { useState } from "react";
import { motion } from "framer-motion";

import {
  FaArrowRight,
  FaChartLine,
  FaCheck,
  FaClock,
  FaEnvelope,
  FaSearch,
  FaShieldAlt,
  FaWhatsapp,
} from "react-icons/fa";

import { trackEvent } from "../../utils/analytics";
import Toast from "../shared/Toast";

import "./AuditForm.css";


/* ==========================================================
   INITIAL FORM DATA

   IMPORTANT:
   These property names match the Google Sheets submission.
========================================================== */

const initialFormData = {
  name: "",
  business: "",
  email: "",
  countryCode: "+254",
  phone: "",
  instagram: "",
  service: "",
  message: "",
};


/* ==========================================================
   AUDIT BENEFITS
========================================================== */

const auditBenefits = [
  {
    icon: <FaSearch />,
    title: "Visibility Review",
    text:
      "We assess how easily potential customers can discover your business online.",
  },
  {
    icon: <FaChartLine />,
    title: "Growth Opportunities",
    text:
      "We identify practical opportunities for improving enquiries, credibility and conversions.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Digital Presence Check",
    text:
      "We review the strength and consistency of your website, branding and online profiles.",
  },
];


/* ==========================================================
   AUDIT FORM
========================================================== */

export default function AuditForm() {
  const [formData, setFormData] =
    useState(initialFormData);

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [toast, setToast] = useState({
    show: false,
    type: "success",
    message: "",
  });


  /* ======================================================
     PHONE VALIDATION
  ====================================================== */

  const phoneValid =
    formData.phone.length === 9;


  /* ======================================================
     SHOW TOAST
  ====================================================== */

  const showToast = (
    type,
    message
  ) => {
    setToast({
      show: true,
      type,
      message,
    });

    window.setTimeout(() => {
      setToast({
        show: false,
        type: "",
        message: "",
      });
    }, 3000);
  };


  /* ======================================================
     HANDLE INPUT CHANGES
  ====================================================== */

  const handleChange = (event) => {
    const {
      name,
      value,
    } = event.target;


    /* ----------------------------------------------
       PHONE: NUMBERS ONLY, MAXIMUM 9 DIGITS
    ---------------------------------------------- */

    if (name === "phone") {
      const cleaned =
        value.replace(/\D/g, "");

      if (cleaned.length <= 9) {
        setFormData((currentData) => ({
          ...currentData,
          phone: cleaned,
        }));
      }

      return;
    }


    /* ----------------------------------------------
       ALL OTHER INPUTS
    ---------------------------------------------- */

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };


  /* ======================================================
     SUBMIT AUDIT REQUEST
  ====================================================== */

  const handleSubmit = async (event) => {
    event.preventDefault();


    /* ----------------------------------------------
       PREVENT DUPLICATE SUBMISSIONS
    ---------------------------------------------- */

    if (isSubmitting) {
      return;
    }


    /* ----------------------------------------------
       VALIDATE PHONE NUMBER
    ---------------------------------------------- */

    if (!phoneValid) {
      showToast(
        "error",
        "Phone number must contain exactly 9 digits."
      );

      return;
    }


    setIsSubmitting(true);


    try {
      /* --------------------------------------------
         GOOGLE SHEETS SUBMISSION

         Do not rename these fields because they
         correspond to your Google Sheet structure.
      -------------------------------------------- */

      await fetch(
        "https://script.google.com/macros/s/AKfycbz_loyVk8KGQNVLxEO8boE6xb-5ydeoJghnIgOPvaXgsTQ34vI39X0z1Y3GEsPst7TQ/exec",
        {
          method: "POST",
          mode: "no-cors",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            action: "newLead",

            ...formData,

            phone:
              formData.countryCode +
              formData.phone,
          }),
        }
      );


      /* --------------------------------------------
         WHATSAPP MESSAGE
      -------------------------------------------- */

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
        encodeURIComponent(
          whatsappMessage
        );


      /* --------------------------------------------
         ANALYTICS
      -------------------------------------------- */

      trackEvent(
        "Audit Request",
        "Lead Generated",
        formData.service
      );


      /* --------------------------------------------
         RESET FORM
      -------------------------------------------- */

      setFormData(
        initialFormData
      );


      showToast(
        "success",
        "Audit request submitted successfully."
      );


      /* --------------------------------------------
         OPEN WHATSAPP
      -------------------------------------------- */

      window.setTimeout(() => {
        window.open(
          `https://wa.me/254101709129?text=${encodedMessage}`,
          "_blank",
          "noopener,noreferrer"
        );
      }, 900);

    } catch (error) {
      console.error(
        "Audit submission failed:",
        error
      );

      showToast(
        "error",
        "Something went wrong. Please try again."
      );

    } finally {
      window.setTimeout(() => {
        setIsSubmitting(false);
      }, 1000);
    }
  };


  return (
    <section
      id="audit"
      className="audit-section"
    >
      <Toast
        show={toast.show}
        type={toast.type}
        message={toast.message}
      />


      {/* Background */}

      <div className="audit-background-grid" />

      <div className="audit-glow audit-glow-left" />

      <div className="audit-glow audit-glow-right" />


      <div className="audit-container">

        {/* ==================================================
            SECTION HEADER
        ================================================== */}

        <motion.div
          className="audit-header"
          initial={{
            opacity: 0,
            y: 28,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
        >
          <span className="audit-eyebrow">
            FREE DIGITAL REVIEW
          </span>

          <h2>
            Get Your Free
            <span>
              Growth Audit.
            </span>
          </h2>

          <p>
            Tell us about your business and we will identify practical
            opportunities for improving your visibility, credibility,
            customer enquiries and digital growth.
          </p>
        </motion.div>


        {/* ==================================================
            MAIN LAYOUT
        ================================================== */}

        <div className="audit-layout">

          {/* ==================================================
              AUDIT INFORMATION
          ================================================== */}

          <motion.div
            className="audit-information"
            initial={{
              opacity: 0,
              x: -35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >
            <span className="audit-information-label">
              WHAT YOU WILL RECEIVE
            </span>

            <h3>
              A practical starting point for your next stage of growth.
            </h3>

            <p className="audit-information-intro">
              The audit helps us understand your current position before
              recommending a website, SEO, branding, marketing or complete
              growth solution.
            </p>


            <div className="audit-benefits">

              {auditBenefits.map((benefit) => (

                <article
                  key={benefit.title}
                  className="audit-benefit"
                >
                  <div className="audit-benefit-icon">
                    {benefit.icon}
                  </div>

                  <div>
                    <h4>
                      {benefit.title}
                    </h4>

                    <p>
                      {benefit.text}
                    </p>
                  </div>
                </article>

              ))}

            </div>


            <div className="audit-trust-panel">

              <div className="audit-trust-item">
                <span>
                  <FaCheck />
                </span>

                No consultation fee
              </div>

              <div className="audit-trust-item">
                <span>
                  <FaCheck />
                </span>

                No obligation to purchase
              </div>

              <div className="audit-trust-item">
                <span>
                  <FaCheck />
                </span>

                Clear recommendations
              </div>

            </div>


            <div className="audit-response-note">
              <FaClock />

              <div>
                <small>
                  RESPONSE TIME
                </small>

                <strong>
                  Usually within 30 minutes
                </strong>
              </div>
            </div>

          </motion.div>


          {/* ==================================================
              AUDIT FORM
          ================================================== */}

          <motion.form
            className="audit-form"
            onSubmit={handleSubmit}
            initial={{
              opacity: 0,
              x: 35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
          >
            <div className="audit-form-top">

              <div>
                <span>
                  START YOUR AUDIT
                </span>

                <h3>
                  Tell us about your business
                </h3>
              </div>

              <div className="audit-form-icon">
                <FaChartLine />
              </div>

            </div>


            {/* Full name and business */}

            <div className="audit-form-row">

              <div className="audit-field">

                <label htmlFor="audit-name">
                  Full Name
                </label>

                <input
                  id="audit-name"
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                  required
                />

              </div>


              <div className="audit-field">

                <label htmlFor="audit-business">
                  Business Name
                </label>

                <input
                  id="audit-business"
                  type="text"
                  name="business"
                  placeholder="Your business name"
                  value={formData.business}
                  onChange={handleChange}
                  autoComplete="organization"
                  required
                />

              </div>

            </div>


            {/* Email */}

            <div className="audit-field">

              <label htmlFor="audit-email">
                Email Address
              </label>

              <div className="audit-input-icon">

                <FaEnvelope />

                <input
                  id="audit-email"
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                />

              </div>

            </div>


            {/* Phone */}

            <div className="audit-field">

              <label htmlFor="audit-phone">
                Phone Number
              </label>

              <div className="phone-group">

                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  aria-label="Country calling code"
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
                  id="audit-phone"
                  type="tel"
                  inputMode="numeric"
                  name="phone"
                  placeholder="712345678"
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                  required
                />

              </div>


              {formData.phone &&
              !phoneValid ? (

                <small className="error-text">
                  Phone number must contain exactly 9 digits.
                </small>

              ) : (

                <small className="phone-helper">
                  Example: +254 712345678
                </small>

              )}

            </div>


            {/* Instagram and service */}

            <div className="audit-form-row">

              <div className="audit-field">

                <label htmlFor="audit-instagram">
                  Instagram Page
                  <span>
                    Optional
                  </span>
                </label>

                <input
                  id="audit-instagram"
                  type="text"
                  name="instagram"
                  placeholder="@yourbusiness"
                  value={formData.instagram}
                  onChange={handleChange}
                />

              </div>


              <div className="audit-field">

                <label htmlFor="audit-service">
                  Service Required
                </label>

                <select
                  id="audit-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
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

              </div>

            </div>


            {/* Message */}

            <div className="audit-field">

              <label htmlFor="audit-message">
                Tell Us About Your Business
                <span>
                  Optional
                </span>
              </label>

              <textarea
                id="audit-message"
                name="message"
                rows="6"
                placeholder="What does your business offer, and what would you like to improve?"
                value={formData.message}
                onChange={handleChange}
              />

            </div>


            {/* Submit */}

            <motion.button
              type="submit"
              className="audit-submit-button"
              disabled={isSubmitting}
              whileHover={
                isSubmitting
                  ? {}
                  : {
                      y: -2,
                    }
              }
              whileTap={
                isSubmitting
                  ? {}
                  : {
                      scale: 0.98,
                    }
              }
            >
              <span>
                {isSubmitting
                  ? "Submitting Request..."
                  : "Request Free Audit"}
              </span>

              {isSubmitting ? (
                <span className="audit-button-loader" />
              ) : (
                <FaArrowRight />
              )}
            </motion.button>


            <div className="audit-form-footer">

              <FaWhatsapp />

              <p>
                After submission, WhatsApp will open with your audit
                details ready to send.
              </p>

            </div>

          </motion.form>

        </div>

      </div>
    </section>
  );
}