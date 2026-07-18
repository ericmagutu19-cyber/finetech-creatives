import { motion } from "framer-motion";
import {
  FaRocket,
  FaBullseye,
  FaChartLine,
  FaHandshake,
} from "react-icons/fa";

const reasons = [
  {
    icon: <FaRocket />,
    title: "Results Driven",
    description:
      "Every website, campaign and strategy is designed to generate measurable business growth.",
  },

  {
    icon: <FaBullseye />,
    title: "Tailored Solutions",
    description:
      "Every project is customized around your business goals instead of using generic templates.",
  },

  {
    icon: <FaChartLine />,
    title: "Growth Focused",
    description:
      "From SEO to digital marketing, everything works together to increase your visibility and sales.",
  },

  {
    icon: <FaHandshake />,
    title: "Dedicated Support",
    description:
      "We believe in long-term partnerships and continuous improvement for every client.",
  },
];

export default function WhyUs() {
  return (
    <section className="section">

      <div className="container">

        <h2
          style={{
            textAlign: "center",
          }}
        >
          Why Choose Fine Tech Creatives
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#999",
            maxWidth: "700px",
            margin: "20px auto 60px",
          }}
        >
          We combine creativity, technology
          and digital strategy to help your
          business stand out and grow.
        </p>

        <div className="why-grid">

          {reasons.map((item, index) => (

            <motion.div
              key={index}
              className="why-card"

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
                delay: index * 0.1,
              }}

              viewport={{
                once: true,
              }}
            >

              <div className="why-icon">
                {item.icon}
              </div>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}