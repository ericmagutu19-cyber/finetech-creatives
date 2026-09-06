import { motion } from "framer-motion";

import {
  FaCheck,
  FaArrowRight,
  FaBuilding,
  FaChartLine,
  FaClock,
  FaLayerGroup,
} from "react-icons/fa";

import "./Packages.css";


/* ==========================================================
   PACKAGE DATA
========================================================== */

const packages = [
  {
    id: 1,

    icon: <FaBuilding />,

    name: "Foundation Package",

    type: "One-Time Digital Setup",

    price: "KES 50,000",

    billing: "Starting investment",

    description:
      "Designed for businesses that need a professional digital foundation before investing in continuous growth and marketing.",

    idealFor:
      "New businesses, small businesses and brands that need to establish a credible online presence.",

    timeline:
      "Approximately 3–5 weeks",

    featured: false,

    className: "package-foundation",

    features: [
      "Professional website development",
      "Essential SEO setup",
      "Google Business Profile setup or optimization",
      "Google Analytics and performance tracking",
      "WhatsApp and enquiry integration",
    ],
  },

  {
    id: 2,

    icon: <FaChartLine />,

    name: "Growth Package",

    type: "Ongoing Growth Support",

    price: "KES 30,000",

    billing: "Per month",

    description:
      "Built for businesses that already have a digital foundation and need consistent optimization, visibility growth and performance monitoring.",

    idealFor:
      "Growing businesses ready to improve visibility, enquiries, content consistency and long-term digital performance.",

    timeline:
      "Recommended commitment: 3 months or more",

    featured: true,

    className: "package-growth",

    features: [
      "Monthly SEO optimization",
      "Google Business Profile management",
      "Monthly content creation",
      "Performance monitoring and reporting",
      "Visibility and growth strategy",
    ],
  },
];


/* ==========================================================
   MOTION VARIANTS
========================================================== */

const packageVariants = {
  hidden: {
    opacity: 0,
    y: 38,
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
   GROWTH PACKAGES
========================================================== */

export default function Packages() {
  return (
    <section
      id="packages"
      className="packages-section"
    >
      {/* Background */}

      <div className="packages-background-grid" />

      <div className="packages-glow packages-glow-left" />

      <div className="packages-glow packages-glow-right" />


      <div className="packages-container">

        {/* ==================================================
            HEADER
        ================================================== */}

        <motion.div
          className="packages-header"
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
          <span className="packages-eyebrow">
            GROWTH PACKAGES
          </span>

          <h2>
            Choose the Support Your
            <span>
              Business Needs Right Now.
            </span>
          </h2>

          <p>
            Our packages are structured around two different stages of
            business growth: establishing a strong digital foundation and
            maintaining consistent visibility, optimization and progress.
          </p>
        </motion.div>


        {/* ==================================================
            PACKAGE COMPARISON INTRO
        ================================================== */}

        <motion.div
          className="packages-explainer"
          initial={{
            opacity: 0,
            y: 22,
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
          <div className="packages-explainer-icon">
            <FaLayerGroup />
          </div>

          <div>
            <strong>
              Not another general service list
            </strong>

            <p>
              The Foundation Package builds the essential digital system.
              The Growth Package provides ongoing monthly improvement after
              that foundation is in place.
            </p>
          </div>
        </motion.div>


        {/* ==================================================
            PACKAGE CARDS
        ================================================== */}

        <motion.div
          className="packages-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            staggerChildren: 0.12,
          }}
        >
          {packages.map((plan) => (
            <motion.article
              key={plan.id}
              className={`
                package-card
                ${plan.className}
                ${
                  plan.featured
                    ? "package-card-featured"
                    : ""
                }
              `}
              variants={packageVariants}
              whileHover={{
                y: -9,
              }}
            >
              {/* Top light */}

              <div className="package-card-light" />


              {/* Recommended label */}

              {plan.featured && (
                <span className="package-recommended">
                  Recommended for ongoing growth
                </span>
              )}


              {/* Header */}

              <div className="package-card-header">

                <div className="package-icon">
                  {plan.icon}
                </div>

                <div>
                  <span className="package-type">
                    {plan.type}
                  </span>

                  <h3>
                    {plan.name}
                  </h3>
                </div>

              </div>


              {/* Price */}

              <div className="package-price">

                <strong>
                  {plan.price}
                </strong>

                <span>
                  {plan.billing}
                </span>

              </div>


              {/* Description */}

              <p className="package-description">
                {plan.description}
              </p>


              {/* Best for */}

              <div className="package-ideal">

                <small>
                  BEST FOR
                </small>

                <p>
                  {plan.idealFor}
                </p>

              </div>


              {/* Features */}

              <ul className="package-features">

                {plan.features.map((feature) => (

                  <li key={feature}>

                    <span>
                      <FaCheck />
                    </span>

                    <p>
                      {feature}
                    </p>

                  </li>

                ))}

              </ul>


              {/* Timeline */}

              <div className="package-timeline">

                <FaClock />

                <div>

                  <small>
                    DELIVERY / COMMITMENT
                  </small>

                  <span>
                    {plan.timeline}
                  </span>

                </div>

              </div>


              {/* CTA */}

              <motion.a
                href="#audit"
                className="package-button"
                whileHover={{
                  x: 4,
                }}
                whileTap={{
                  scale: 0.97,
                }}
              >
                <span>
                  Discuss This Package
                </span>

                <FaArrowRight />
              </motion.a>

            </motion.article>
          ))}
        </motion.div>


        {/* ==================================================
            CUSTOM QUOTE
        ================================================== */}

        <motion.div
          className="packages-custom"
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
            delay: 0.12,
          }}
          viewport={{
            once: true,
          }}
        >
          <div>

            <span>
              NEED A DIFFERENT COMBINATION?
            </span>

            <h3>
              Your package can be adjusted around your business priorities.
            </h3>

            <p>
              A custom quotation may be prepared where the required scope
              does not fit neatly into either package.
            </p>

          </div>


          <a href="#audit">
            Request a Custom Quote

            <FaArrowRight />
          </a>

        </motion.div>

      </div>
    </section>
  );
}