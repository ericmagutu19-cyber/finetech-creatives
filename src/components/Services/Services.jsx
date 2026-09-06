import { motion } from "framer-motion";

import {
  FaGlobe,
  FaSearch,
  FaMapMarkerAlt,
  FaPaintBrush,
  FaBullhorn,
  FaRocket,
  FaArrowRight,
  FaCheck,
  FaClock,
} from "react-icons/fa";

import { serviceTemplates } from "../../data/services";

import "./Services.css";


/* ==========================================================
   SERVICE ICONS
========================================================== */

const serviceIcons = {
  "Website Solutions": <FaGlobe />,
  "Search Visibility": <FaSearch />,
  "Google Business Profile": <FaMapMarkerAlt />,
  "Brand Identity": <FaPaintBrush />,
  "Social Media Marketing": <FaBullhorn />,
  "Business Growth Packages": <FaRocket />,
};


/* ==========================================================
   SERVICE PERSONALITY CLASSES
========================================================== */

const serviceClasses = {
  "Website Solutions": "service-web",
  "Search Visibility": "service-search",
  "Google Business Profile": "service-local",
  "Brand Identity": "service-brand",
  "Social Media Marketing": "service-social",
  "Business Growth Packages": "service-growth",
};


/* ==========================================================
   MOTION VARIANTS
========================================================== */

const sectionVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.1,
    },
  },
};


const cardVariants = {
  hidden: {
    opacity: 0,
    y: 45,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


/* ==========================================================
   SERVICES COMPONENT
========================================================== */

export default function Services() {
  return (
    <section
      id="services"
      className="services-section"
    >
      {/* Background effects */}

      <div className="services-background" />

      <div className="services-glow services-glow-left" />

      <div className="services-glow services-glow-right" />


      <div className="services-container">

        {/* ==================================================
            SECTION HEADER
        ================================================== */}

        <motion.div
          className="services-header"
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
          <span className="services-eyebrow">
            OUR DIGITAL SOLUTIONS
          </span>

          <h2>
            Everything Your Business Needs
            <span> To Grow Online</span>
          </h2>

          <p>
            From high-performing websites and search visibility to
            branding, social media and complete growth systems, we build
            digital solutions designed to help your business get found,
            get chosen and grow.
          </p>
        </motion.div>


        {/* ==================================================
            SERVICES GRID
        ================================================== */}

        <motion.div
          className="services-grid"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
        >
          {Object.entries(serviceTemplates).map(
            ([title, service], index) => {

              const personalityClass =
                serviceClasses[title] || "";

              return (
                <motion.article
                  key={title}
                  className={`
                    service-card
                    ${personalityClass}
                  `}
                  variants={cardVariants}
                  whileHover={{
                    y: -10,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                >
                  {/* Animated top light */}

                  <div className="service-card-light" />


                  {/* Card heading */}

                  <div className="service-card-header">

                    <div className="service-icon-wrap">

                      <div className="service-icon">
                        {serviceIcons[title]}
                      </div>

                      <span className="service-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                    </div>


                    <div className="service-title-group">

                      <span className="service-category">
                        Digital Solution
                      </span>

                      <h3>
                        {title}
                      </h3>

                    </div>

                  </div>


                  {/* Description */}

                  <p className="service-description">
                    {service.description}
                  </p>


                  {/* Highlights */}

                  <ul className="service-list">

                    {service.highlights.map((item) => (

                      <li key={item}>

                        <span className="service-check">
                          <FaCheck />
                        </span>

                        <span>
                          {item}
                        </span>

                      </li>

                    ))}

                  </ul>


                  {/* Service information */}

                  <div className="service-meta">

                    <div className="service-price">

                      <small>
                        Starting From
                      </small>

                      <strong>

                        {service.startingPrice
                          ? `KES ${service.startingPrice.toLocaleString()}`
                          : "Custom Quote"}

                      </strong>

                    </div>


                    <div className="service-timeline">

                      <FaClock />

                      <div>

                        <small>
                          Timeline
                        </small>

                        <span>
                          {service.timeline}
                        </span>

                      </div>

                    </div>

                  </div>


                  {/* CTA */}

                  <motion.a
                    href="#audit"
                    className="service-btn"
                    whileHover={{
                      x: 4,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                  >
                    <span>
                      Request Proposal
                    </span>

                    <FaArrowRight />
                  </motion.a>

                </motion.article>
              );
            }
          )}
        </motion.div>


        {/* ==================================================
            SECTION FOOTER CTA
        ================================================== */}

        <motion.div
          className="services-footer"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
        >
          <p>
            Not sure which solution is right for your business?
          </p>

          <a href="#audit">
            Get a Free Digital Audit
            <FaArrowRight />
          </a>
        </motion.div>

      </div>
    </section>
  );
}