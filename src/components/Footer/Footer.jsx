import {
  FaArrowUp,
  FaEnvelope,
  FaGlobe,
  FaInstagram,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

import { companyData } from "../../config/companyData";

import "./Footer.css";


/* ==========================================================
   FOOTER LINKS
========================================================== */

const quickLinks = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Why Choose Us",
    href: "#why-us",
  },
  {
    label: "Our Process",
    href: "#process",
  },
  {
    label: "Our Projects",
    href: "#portfolio",
  },
  {
    label: "Free Growth Audit",
    href: "#audit",
  },
];


const serviceLinks = [
  {
    label: "Website Solutions",
    href: "#website-solutions",
  },
  {
    label: "SEO & Google Visibility",
    href: "#search-visibility",
  },
  {
    label: "Brand Identity",
    href: "#brand-identity",
  },
  {
    label: "Social Media Marketing",
    href: "#social-media-marketing",
  },
  {
    label: "E-Commerce Websites",
    href: "#website-solutions",
  },
  {
    label: "Growth Packages",
    href: "#business-growth-packages",
  },
];


/* ==========================================================
   FOOTER
========================================================== */

export default function Footer() {
  const currentYear =
    new Date().getFullYear();


  const whatsappMessage =
    encodeURIComponent(
      `Hello Fine Tech Creatives,

I would like to learn more about your digital services.`
    );


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  return (
    <footer
      className="site-footer"
    >
      {/* Background effects */}

      <div className="footer-background-grid" />

      <div className="footer-glow footer-glow-left" />

      <div className="footer-glow footer-glow-right" />


      <div className="footer-container">

        {/* ==================================================
            FOOTER MAIN CONTENT
        ================================================== */}

        <div className="footer-main">

          {/* ==================================================
              COMPANY INFORMATION
          ================================================== */}

          <div className="footer-brand">

            <a
              href="#home"
              className="footer-brand-name"
            >
              {companyData.name}
            </a>


            <p className="footer-slogan">
              {companyData.slogan}
            </p>


            <p className="footer-description">
              We help businesses build stronger digital
              foundations through professional websites,
              search visibility, branding, digital marketing
              and practical growth solutions.
            </p>


            <div className="footer-social-links">

              <a
                href={`https://wa.me/254101709129?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Fine Tech Creatives on WhatsApp"
                className="footer-social-link footer-whatsapp"
              >
                <FaWhatsapp />
              </a>


              <a
                href="https://www.instagram.com/fine_tech_creates/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Fine Tech Creatives on Instagram"
                className="footer-social-link footer-instagram"
              >
                <FaInstagram />
              </a>


              <a
                href={`mailto:${companyData.email}`}
                aria-label="Email Fine Tech Creatives"
                className="footer-social-link footer-email"
              >
                <FaEnvelope />
              </a>

            </div>


            <div className="footer-status">

              <span />

              Available for new digital projects

            </div>

          </div>


          {/* ==================================================
              QUICK LINKS
          ================================================== */}

          <div className="footer-column">

            <h3>
              Quick Links
            </h3>


            <nav
              className="footer-links"
              aria-label="Footer navigation"
            >
              {quickLinks.map((link) => (

                <a
                  key={link.label}
                  href={link.href}
                >
                  <span />

                  {link.label}
                </a>

              ))}
            </nav>

          </div>


          {/* ==================================================
              SERVICES
          ================================================== */}

          <div className="footer-column">

            <h3>
              Services
            </h3>


            <nav
              className="footer-links"
              aria-label="Footer services"
            >
              {serviceLinks.map((link) => (

                <a
                  key={link.label}
                  href={link.href}
                >
                  <span />

                  {link.label}
                </a>

              ))}
            </nav>

          </div>


          {/* ==================================================
              CONTACT
          ================================================== */}

          <div className="footer-column footer-contact-column">

            <h3>
              Contact
            </h3>


            <div className="footer-contact-list">

              <a
                href={`https://wa.me/254101709129?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-item"
              >
                <span className="footer-contact-icon">
                  <FaWhatsapp />
                </span>

                <div>

                  <small>
                    WhatsApp
                  </small>

                  <strong>
                    {companyData.phone}
                  </strong>

                </div>
              </a>


              <a
                href={`mailto:${companyData.email}`}
                className="footer-contact-item"
              >
                <span className="footer-contact-icon">
                  <FaEnvelope />
                </span>

                <div>

                  <small>
                    Email
                  </small>

                  <strong>
                    {companyData.email}
                  </strong>

                </div>
              </a>


              <a
                href="https://www.instagram.com/fine_tech_creates/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-item"
              >
                <span className="footer-contact-icon">
                  <FaInstagram />
                </span>

                <div>

                  <small>
                    Instagram
                  </small>

                  <strong>
                    @fine_tech_creates
                  </strong>

                </div>
              </a>


              <div className="footer-contact-item">

                <span className="footer-contact-icon">
                  <FaMapMarkerAlt />
                </span>

                <div>

                  <small>
                    Location
                  </small>

                  <strong>
                    Nairobi, Kenya
                  </strong>

                </div>
              </div>


              <a
                href={companyData.website}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Fine Tech Creatives website"
                className="footer-contact-item"
              >
                <span className="footer-contact-icon">
                  <FaGlobe />
                </span>

                <div>

                  <small>
                    Website
                  </small>

                  <strong>
                    {companyData.website}
                  </strong>

                </div>
              </a>

            </div>

          </div>

        </div>


        {/* ==================================================
            FOOTER AUDIT STRIP
        ================================================== */}

        <div className="footer-audit-strip">

          <div>

            <span>
              NOT SURE WHERE TO START?
            </span>

            <h3>
              Get a free review of your current digital presence.
            </h3>

          </div>


          <a href="#audit">
            Request Free Audit
          </a>

        </div>


        {/* ==================================================
            FOOTER BOTTOM
        ================================================== */}

        <div className="footer-bottom">

          <p>
            © {currentYear} {companyData.name}. All Rights Reserved.
          </p>


          <div className="footer-bottom-links">

            <a href="#services">
              Services
            </a>

            <a href="#portfolio">
              Projects
            </a>

            <a href="#audit">
              Contact
            </a>

          </div>


          <button
            type="button"
            className="footer-back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <FaArrowUp />

            <span>
              Back to top
            </span>
          </button>

        </div>

      </div>
    </footer>
  );
}