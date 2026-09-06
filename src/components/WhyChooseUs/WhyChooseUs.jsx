import { motion } from "framer-motion";

import {
  FaRocket,
  FaBullseye,
  FaChartLine,
  FaHandshake,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa";

import "./WhyChooseUs.css";


/* ==========================================================
   WHY CHOOSE US DATA
========================================================== */

const reasons = [
  {
    id: 1,
    icon: <FaRocket />,
    number: "01",
    title: "Results Driven",
    description:
      "Every website, campaign and strategy is designed to support measurable business growth.",
    className: "why-results",
  },
  {
    id: 2,
    icon: <FaBullseye />,
    number: "02",
    title: "Tailored Solutions",
    description:
      "Every project is shaped around your goals, audience and market instead of relying on generic templates.",
    className: "why-tailored",
  },
  {
    id: 3,
    icon: <FaChartLine />,
    number: "03",
    title: "Growth Focused",
    description:
      "Your website, SEO, branding and marketing work together as one connected growth system.",
    className: "why-growth",
  },
  {
    id: 4,
    icon: <FaHandshake />,
    number: "04",
    title: "Dedicated Support",
    description:
      "We value clear communication, dependable support and long-term partnerships with our clients.",
    className: "why-support",
  },
];


const cardVariants = {
  hidden: {
    opacity: 0,
    y: 36,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


/* ==========================================================
   WHY CHOOSE FINE TECH CREATIVES
========================================================== */

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="why-section"
    >
      {/* Background effects */}

      <div className="why-background-grid" />

      <div className="why-background-glow" />


      <div className="why-container">

        {/* ==================================================
            LEFT CONTENT
        ================================================== */}

        <motion.div
          className="why-content"
          initial={{
            opacity: 0,
            x: -36,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.75,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
        >
          <span className="why-eyebrow">
            WHY FINE TECH CREATIVES
          </span>

          <h2>
            More Than Digital Services.
            <span>
              A Partner in Your Growth.
            </span>
          </h2>

          <p className="why-intro">
            We combine creativity, technology and practical digital
            strategy to help businesses strengthen their online presence,
            attract the right audience and grow with confidence.
          </p>


          {/* Trust points */}

          <div className="why-trust-list">

            <div className="why-trust-item">

              <span>
                <FaCheck />
              </span>

              <p>
                Clear strategy before execution
              </p>

            </div>


            <div className="why-trust-item">

              <span>
                <FaCheck />
              </span>

              <p>
                Solutions aligned with business goals
              </p>

            </div>


            <div className="why-trust-item">

              <span>
                <FaCheck />
              </span>

              <p>
                Honest communication and ongoing support
              </p>

            </div>

          </div>


          {/* CTA */}

          <motion.a
            href="#audit"
            className="why-cta"
            whileHover={{
              x: 5,
            }}
            whileTap={{
              scale: 0.97,
            }}
          >
            <span>
              Start Your Growth Journey
            </span>

            <FaArrowRight />
          </motion.a>


          {/* Decorative metric */}

          <div className="why-partner-note">

            <span className="why-partner-dot" />

            <p>
              Strategy, design and technology working together.
            </p>

          </div>

        </motion.div>


        {/* ==================================================
            REASON CARDS
        ================================================== */}

        <motion.div
          className="why-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            staggerChildren: 0.1,
          }}
        >
          {reasons.map((item) => (

            <motion.article
              key={item.id}
              className={`
                why-card
                ${item.className}
              `}
              variants={cardVariants}
              whileHover={{
                y: -8,
              }}
            >
              <div className="why-card-top">

                <div className="why-icon">
                  {item.icon}
                </div>

                <span className="why-number">
                  {item.number}
                </span>

              </div>


              <h3>
                {item.title}
              </h3>


              <p>
                {item.description}
              </p>


              <div className="why-card-line" />

            </motion.article>

          ))}
        </motion.div>

      </div>
    </section>
  );
}