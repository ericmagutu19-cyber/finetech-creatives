import { motion } from "framer-motion";
import { FaRocket, FaArrowRight } from "react-icons/fa";

import "./HeroButtons.css";

export default function HeroButtons() {
  return (
    <div className="hero-buttons">

      {/* ==========================================
          START YOUR PROJECT
          Scrolls to the Audit / Contact Section
      ========================================== */}

      <motion.a
        href="#audit"
        className="btn-primary"

        whileHover={{
          scale: 1.04,
        }}

        whileTap={{
          scale: 0.96,
        }}

        transition={{
          duration: 0.2,
          ease: "easeOut",
        }}
      >
        <FaRocket />

        <span>
          Start Your Project
        </span>

      </motion.a>


      {/* ==========================================
          EXPLORE PORTFOLIO
          Scrolls to Portfolio Section
      ========================================== */}

      <motion.a
        href="#portfolio"
        className="btn-secondary"

        whileHover={{
          scale: 1.04,
        }}

        whileTap={{
          scale: 0.96,
        }}

        transition={{
          duration: 0.2,
          ease: "easeOut",
        }}
      >
        <span>
          Explore Portfolio
        </span>

        <FaArrowRight />

      </motion.a>

    </div>
  );
}