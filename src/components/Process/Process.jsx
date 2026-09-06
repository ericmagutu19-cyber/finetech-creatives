import { motion } from "framer-motion";

import {
  FaCompass,
  FaSearch,
  FaLightbulb,
  FaCogs,
  FaChartLine,
  FaArrowRight,
} from "react-icons/fa";

import "./Process.css";


/* ==========================================================
   PROCESS DATA
========================================================== */

const processSteps = [
  {
    id: 1,
    number: "01",
    icon: <FaCompass />,
    title: "Discovery",
    text:
      "We learn about your business, audience, goals and current digital position.",
    className: "process-discovery",
  },
  {
    id: 2,
    number: "02",
    icon: <FaSearch />,
    title: "Audit",
    text:
      "We identify gaps, opportunities and areas that may be limiting your growth.",
    className: "process-audit",
  },
  {
    id: 3,
    number: "03",
    icon: <FaLightbulb />,
    title: "Strategy",
    text:
      "We create a practical digital growth plan tailored to your business needs.",
    className: "process-strategy",
  },
  {
    id: 4,
    number: "04",
    icon: <FaCogs />,
    title: "Implementation",
    text:
      "We execute the agreed website, SEO, branding and marketing solutions.",
    className: "process-implementation",
  },
  {
    id: 5,
    number: "05",
    icon: <FaChartLine />,
    title: "Growth",
    text:
      "We review performance, improve what works and support long-term progress.",
    className: "process-growth",
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


const stepVariants = {
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
   GROWTH PROCESS
========================================================== */

export default function Process() {
  return (
    <section
      id="process"
      className="process-section"
    >
      {/* Background effects */}

      <div className="process-background-grid" />

      <div className="process-background-glow" />


      <div className="process-container">

        {/* ==================================================
            SECTION HEADER
        ================================================== */}

        <motion.div
          className="process-header"
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
          <span className="process-eyebrow">
            OUR GROWTH PROCESS
          </span>

          <h2>
            A Clear Path From Strategy
            <span> To Measurable Growth.</span>
          </h2>

          <p>
            Every project follows a clear process designed to reduce
            confusion, align expectations and keep every decision focused
            on your business goals.
          </p>
        </motion.div>


        {/* ==================================================
            PROCESS TIMELINE
        ================================================== */}

        <motion.div
          className="process-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
        >
          {/* Desktop connecting line */}

          <div className="process-track">

            <motion.span
              initial={{
                scaleX: 0,
              }}
              whileInView={{
                scaleX: 1,
              }}
              transition={{
                duration: 1.4,
                ease: "easeInOut",
                delay: 0.2,
              }}
              viewport={{
                once: true,
              }}
            />

          </div>


          {processSteps.map((step, index) => (

            <motion.article
              key={step.id}
              className={`
                process-step
                ${step.className}
              `}
              variants={stepVariants}
              whileHover={{
                y: -8,
              }}
            >
              {/* Number and icon */}

              <div className="process-step-head">

                <div className="process-marker">

                  <span className="process-marker-ring" />

                  <div className="process-icon">
                    {step.icon}
                  </div>

                </div>

                <span className="process-number">
                  {step.number}
                </span>

              </div>


              {/* Text */}

              <div className="process-step-content">

                <span className="process-stage">
                  Stage {step.number}
                </span>

                <h3>
                  {step.title}
                </h3>

                <p>
                  {step.text}
                </p>

              </div>


              {/* Direction indicator */}

              {index < processSteps.length - 1 && (

                <span className="process-arrow">

                  <FaArrowRight />

                </span>

              )}


              {/* Bottom glow */}

              <div className="process-step-light" />

            </motion.article>

          ))}
        </motion.div>


        {/* ==================================================
            FOOTER STATEMENT
        ================================================== */}

        <motion.div
          className="process-footer"
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
            delay: 0.2,
          }}
          viewport={{
            once: true,
          }}
        >
          <span className="process-footer-dot" />

          <p>
            You remain informed throughout the process, from the first
            conversation to implementation and continued growth.
          </p>

        </motion.div>

      </div>
    </section>
  );
}