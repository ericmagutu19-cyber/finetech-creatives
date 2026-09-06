import { motion } from "framer-motion";

import {
  FaCheckCircle,
  FaChartLine,
  FaHandshake,
  FaRocket,
} from "react-icons/fa";

import "./Stats.css";


/* ==========================================================
   RESULTS DATA
========================================================== */

const stats = [
  {
    id: 1,
    icon: <FaRocket />,
    number: "20+",
    label: "Projects Completed",
    description:
      "Digital projects delivered across websites, branding, marketing and business growth solutions.",
    className: "stat-projects",
  },
  {
    id: 2,
    icon: <FaHandshake />,
    number: "10+",
    label: "Businesses Assisted",
    description:
      "Businesses supported with practical digital strategies tailored to their goals and market.",
    className: "stat-businesses",
  },
  {
    id: 3,
    icon: <FaCheckCircle />,
    number: "95%",
    label: "Client Satisfaction",
    description:
      "A strong commitment to clear communication, quality delivery and dependable support.",
    className: "stat-satisfaction",
  },
  {
    id: 4,
    icon: <FaChartLine />,
    number: "100%",
    label: "Growth Focused",
    description:
      "Every solution is designed to strengthen visibility, credibility and long-term growth.",
    className: "stat-growth",
  },
];


/* ==========================================================
   MOTION
========================================================== */

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
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
   RESULTS THAT MATTER
========================================================== */

export default function Stats() {
  return (
    <section
      id="results"
      className="stats-section"
    >
      {/* Background */}

      <div className="stats-background" />

      <div className="stats-glow stats-glow-left" />

      <div className="stats-glow stats-glow-right" />


      <div className="stats-container">

        {/* ==================================================
            HEADER
        ================================================== */}

        <motion.div
          className="stats-header"
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
          <span className="stats-eyebrow">
            RESULTS THAT MATTER
          </span>

          <h2>
            Built Around Progress.
            <span>
              Focused on Business Growth.
            </span>
          </h2>

          <p>
            Our work goes beyond attractive design. We build practical
            digital solutions that help businesses improve visibility,
            strengthen credibility and create more opportunities for growth.
          </p>
        </motion.div>


        {/* ==================================================
            RESULTS GRID
        ================================================== */}

        <motion.div
          className="stats-grid"
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
          {stats.map((item) => (
            <motion.article
              key={item.id}
              className={`
                stat-card
                ${item.className}
              `}
              variants={cardVariants}
              whileHover={{
                y: -8,
              }}
            >
              <div className="stat-card-light" />

              <div className="stat-icon">
                {item.icon}
              </div>

              <div className="stat-number">
                {item.number}
              </div>

              <h3>
                {item.label}
              </h3>

              <p>
                {item.description}
              </p>

              <div className="stat-progress-line">

                <span />

              </div>
            </motion.article>
          ))}
        </motion.div>


        {/* ==================================================
            SUPPORTING STATEMENT
        ================================================== */}

        <motion.div
          className="stats-footer"
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
            delay: 0.15,
          }}
          viewport={{
            once: true,
          }}
        >
          <span className="stats-footer-dot" />

          <p>
            Every project is approached with strategy, creativity and a
            clear focus on meaningful business outcomes.
          </p>
        </motion.div>

      </div>
    </section>
  );
}