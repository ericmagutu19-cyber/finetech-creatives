import {
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
  FaGlobe,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { companyData } from "../../config/companyData";

export default function Footer() {
  return (
    <footer
      style={{
        marginTop: "80px",
        background: "#111",
        borderTop: "1px solid #222",
        padding: "60px 20px 30px",
      }}
    >
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "40px",
          alignItems: "start",
        }}
      >
        {/* Company */}

        <div>
          <h2 className="green">
            {companyData.name}
          </h2>

          <p
            style={{
              marginTop: "15px",
              lineHeight: "1.8",
            }}
          >
            {companyData.slogan}
          </p>
        </div>

        {/* Quick Links */}

        <div>
          <h3 className="green">
            Quick Links
          </h3>

          <p>
            <a href="/">Home</a>
          </p>

          <p>
            <a href="#services">
              Services
            </a>
          </p>

          <p>
            <a href="#portfolio">
              Portfolio
            </a>
          </p>

          <p>
            <a href="#contact">
              Contact
            </a>
          </p>
        </div>

        {/* Contact */}

        <div>
          <h3 className="green">
            Contact
          </h3>

          <p>
            <FaWhatsapp
              className="footer-icon"
            />
            {" "}
            {companyData.phone}
          </p>

          <p>
            <FaEnvelope
              className="footer-icon"
            />
            {" "}
            {companyData.email}
          </p>

          <p>
            <FaInstagram
              className="footer-icon"
            />
            {" "}
            @fine_tech_creates
          </p>

          <p>
            <FaMapMarkerAlt
              className="footer-icon"
            />
            {" "}
            Nairobi, Kenya
          </p>

          <p>
            <FaGlobe
              className="footer-icon"
            />
            {" "}
            {companyData.website}
          </p>
        </div>
      </div>

      <hr
        style={{
          margin: "50px 0 20px",
          borderColor: "#222",
        }}
      />

      <div
        style={{
          textAlign: "center",
          color: "#888",
        }}
      >
        © {new Date().getFullYear()}{" "}
        {companyData.name}.
        All Rights Reserved.
      </div>
    </footer>
  );
}