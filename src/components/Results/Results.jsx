import { motion } from "framer-motion";

import {
  FaChartLine,
  FaComments,
  FaShieldAlt,
  FaCoins,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa";

import "./Results.css";


/* ==========================================================
   BUSINESS OUTCOMES
========================================================== */

const outcomes = [
  {
    id: 1,
    number: "01",
    icon: <FaChartLine />,
    title: "More Visibility",
    description:
      "Improve how easily potential customers discover your business through search engines, social media and professional digital platforms.",
    points: [
      "Better search visibility",
      "Stronger brand awareness",
      "Improved audience reach",
    ],
    className: "outcome-visibility",
  },
  {
    id: 2,
    number: "02",
    icon: <FaComments />,
    title: "More Customer Enquiries",
    description:
      "Create clear digital journeys that make it easier for interested customers to contact, message or request your services.",
    points: [
      "Clear calls to action",
      "Simplified contact options",
      "Better lead opportunities",
    ],
    className: "outcome-enquiries",
  },
  {
    id: 3,
    number: "03",
    icon: <FaShieldAlt />,
    title: "Stronger Online Credibility",
    description:
      "Build trust through professional design, consistent branding, useful information and a reliable online presence.",
    points: [
      "Professional presentation",
      "Consistent brand identity",
      "Greater customer confidence",
    ],
    className: "outcome-credibility",
  },
  {
    id: 4,
    number: "04",
    icon: <FaCoins />,
    title: "More Sales Opportunities",
    description:
      "Connect visibility, trust and customer engagement to create more opportunities for enquiries, conversions and business growth.",
    points: [
      "Improved conversion paths",
      "More qualified prospects",
      "Growth-focused systems",
    ],
    className: "outcome-sales",
  },
];


/* ==========================================================
   MOTION VARIANTS
========================================================== */

const containerVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.12,
    },
  },
};


const cardVariants = {
  hidden: {
    opacity: 0,
    y: 38,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.62,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


/* ==========================================================
   WHAT WE HELP BUSINESSES ACHIEVE
========================================================== */

export default function Results() {
  return (
    <section
      id="business-outcomes"
      className="outcomes-section"
    >
      {/* Background */}

      <div className="outcomes-background-grid" />

      <div className="outcomes-glow outcomes-glow-left" />

      <div className="outcomes-glow outcomes-glow-right" />


      <div className="outcomes-container">

        {/* ==================================================
            HEADER
        ================================================== */}

        <motion.div
          className="outcomes-header"
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
          <span className="outcomes-eyebrow">
            BUSINESS OUTCOMES
          </span>

          <h2>
            What We Help
            <span>
              Businesses Achieve.
            </span>
          </h2>

          <p>
            Our digital solutions are designed to move businesses beyond
            simply being online. We help create stronger visibility,
            credibility, customer engagement and opportunities for growth.
          </p>
        </motion.div>


        {/* ==================================================
            OUTCOME CARDS
        ================================================== */}

        <motion.div
          className="outcomes-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
        >
          {outcomes.map((outcome) => (
            <motion.article
              key={outcome.id}
              className={`
                outcome-card
                ${outcome.className}
              `}
              variants={cardVariants}
              whileHover={{
                y: -9,
              }}
            >
              {/* Top light */}

              <div className="outcome-card-light" />


              {/* Header */}

              <div className="outcome-card-head">

                <div className="outcome-icon">
                  {outcome.icon}
                </div>

                <span className="outcome-number">
                  {outcome.number}
                </span>

              </div>


              {/* Content */}

              <h3>
                {outcome.title}
              </h3>

              <p className="outcome-description">
                {outcome.description}
              </p>


              {/* Key outcomes */}

              <ul className="outcome-list">

                {outcome.points.map((point) => (

                  <li key={point}>

                    <span>
                      <FaCheck />
                    </span>

                    {point}

                  </li>

                ))}

              </ul>


              {/* Progress beam */}

              <div className="outcome-progress">

                <span />

              </div>

            </motion.article>
          ))}
        </motion.div>


        {/* ==================================================
            CLOSING CTA
        ================================================== */}

        <motion.div
          className="outcomes-cta"
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
            delay: 0.15,
          }}
          viewport={{
            once: true,
          }}
        >
          <div>

            <span className="outcomes-cta-label">
              READY FOR BETTER RESULTS?
            </span>

            <h3>
              Let’s identify the digital opportunities available to your
              business.
            </h3>

          </div>


          <motion.a
            href="#audit"
            whileHover={{
              x: 4,
            }}
            whileTap={{
              scale: 0.97,
            }}
          >
            Get Your Free Audit

            <FaArrowRight />
          </motion.a>

        </motion.div>

      </div>
    </section>
  );
}