import { motion } from "framer-motion";

import {
  FaQuoteLeft,
  FaStore,
  FaSchool,
  FaCheckCircle,
} from "react-icons/fa";

import "./Testimonials.css";


/* ==========================================================
   TESTIMONIAL DATA
========================================================== */

const testimonials = [
  {
    id: 1,

    icon: <FaStore />,

    project: "Nati Stores",

    client: "Nati Stores Team",

    role: "Sports E-Commerce Business",

    service:
      "E-Commerce Website Development",

    text:
      "Fine Tech Creatives helped us turn our business idea into a professional online store. The website makes it easier for customers to view products, select sizes, place orders and contact us through WhatsApp.",

    outcome:
      "Professional online storefront",

    approval:
      "Draft testimonial — pending client approval",

    className:
      "testimonial-nati",
  },

  {
    id: 2,

    icon: <FaSchool />,

    project:
      "Starlight Ndovoini Academy",

    client:
      "Starlight Ndovoini Academy",

    role:
      "Education Institution",

    service:
      "School Website Development",

    text:
      "Fine Tech Creatives created a modern website that reflects our school’s vision, learning journey and values. The platform gives parents a clearer understanding of the academy and strengthens our professional image.",

    outcome:
      "Stronger school visibility and credibility",

    approval:
      "Draft testimonial — pending client approval",

    className:
      "testimonial-starlight",
  },
];


/* ==========================================================
   MOTION
========================================================== */

const cardVariants = {
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
   CLIENT FEEDBACK
========================================================== */

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="testimonials-section"
    >
      {/* Background */}

      <div className="testimonials-background-grid" />

      <div className="testimonials-glow testimonials-glow-left" />

      <div className="testimonials-glow testimonials-glow-right" />


      <div className="testimonials-container">

        {/* ==================================================
            HEADER
        ================================================== */}

        <motion.div
          className="testimonials-header"
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
          <span className="testimonials-eyebrow">
            CLIENT FEEDBACK
          </span>

          <h2>
            Built With Purpose.
            <span>
              Valued by Our Clients.
            </span>
          </h2>

          <p>
            Our goal is to create digital solutions that are useful,
            professional and aligned with the real needs of each client.
          </p>
        </motion.div>


        {/* ==================================================
            TESTIMONIAL CARDS
        ================================================== */}

        <motion.div
          className="testimonials-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            staggerChildren: 0.14,
          }}
        >
          {testimonials.map((item) => (
            <motion.article
              key={item.id}
              className={`
                testimonial-card
                ${item.className}
              `}
              variants={cardVariants}
              whileHover={{
                y: -9,
              }}
            >
              {/* Top light */}

              <div className="testimonial-card-light" />


              {/* Header */}

              <div className="testimonial-card-header">

                <div className="testimonial-project-icon">
                  {item.icon}
                </div>

                <div className="testimonial-project-info">

                  <span>
                    PROJECT
                  </span>

                  <strong>
                    {item.project}
                  </strong>

                </div>

                <FaQuoteLeft className="testimonial-quote-icon" />

              </div>


              {/* Quote */}

              <blockquote>

                “{item.text}”

              </blockquote>


              {/* Outcome */}

              <div className="testimonial-outcome">

                <FaCheckCircle />

                <span>
                  {item.outcome}
                </span>

              </div>


              {/* Client */}

              <div className="testimonial-client">

                <div className="testimonial-avatar">

                  {item.client
                    .charAt(0)
                    .toUpperCase()}

                </div>


                <div>

                  <h3>
                    {item.client}
                  </h3>

                  <p>
                    {item.role}
                  </p>

                  <span>
                    {item.service}
                  </span>

                </div>

              </div>

            </motion.article>
          ))}
        </motion.div>


        {/* ==================================================
            NOTE
        ================================================== */}

        <motion.div
          className="testimonials-note"
          initial={{
            opacity: 0,
            y: 18,
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
          

        </motion.div>

      </div>
    </section>
  );
}