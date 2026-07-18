import { motion } from "framer-motion";
import {
  FaGlobe,
  FaSearch,
  FaMapMarkerAlt,
  FaPaintBrush,
  FaBullhorn,
  FaRocket,
} from "react-icons/fa";

import { serviceTemplates } from "../../data/services";

const serviceIcons = {
  "Website Solutions": <FaGlobe />,
  "Search Visibility": <FaSearch />,
  "Google Business Profile": <FaMapMarkerAlt />,
  "Brand Identity": <FaPaintBrush />,
  "Social Media Marketing": <FaBullhorn />,
  "Business Growth Packages": <FaRocket />,
};

export default function Services() {
  return (
    <section
      id="services"
      className="section"
    >
      <div className="container">

        <h2
          style={{
            textAlign: "center",
            marginBottom: "15px",
          }}
        >
          Our Services
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#999",
            maxWidth: "700px",
            margin: "0 auto 60px",
            lineHeight: "1.8",
          }}
        >
          We help businesses build a strong online presence through
          professional websites, branding, SEO, digital marketing and
          complete growth solutions.
        </p>

        <div className="services-grid">

          {Object.entries(serviceTemplates).map(
            ([title, service], index) => (

              <motion.div
                key={title}
                className="service-card"

                initial={{
                  opacity: 0,
                  y: 40,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}

                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}

                viewport={{
                  once: true,
                }}
              >

                <div className="service-icon">
                  {serviceIcons[title]}
                </div>

                <h3>{title}</h3>

                <p className="service-description">
                  {service.description}
                </p>

                <ul className="service-list">

                  {service.highlights.map((item) => (

                    <li key={item}>
                      ✓ {item}
                    </li>

                  ))}

                </ul>

                <div className="service-price">

                  <small>
                    Starting From
                  </small>

                  <h3>

                    {service.startingPrice
                      ? `KES ${service.startingPrice.toLocaleString()}`
                      : "Custom Quote"}

                  </h3>

                </div>

                <p
                  style={{
                    color: "#999",
                    marginBottom: "25px",
                  }}
                >
                  Timeline: {service.timeline}
                </p>

                <a
                  href="#audit"
                  className="service-btn"
                >
                  Request Proposal →
                </a>

              </motion.div>

            )
          )}

        </div>

      </div>
    </section>
  );
}