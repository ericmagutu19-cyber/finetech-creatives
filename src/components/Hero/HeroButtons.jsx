import { motion } from "framer-motion";
import { FaRocket, FaArrowRight } from "react-icons/fa";
import "./HeroButtons.css";

export default function HeroButtons() {
  return (
    <div className="hero-buttons">

      <motion.a
        href="#contact"
        className="btn-primary"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
      >
        <FaRocket />
        <span>Start Your Project</span>
      </motion.a>

      <motion.a
        href="#portfolio"
        className="btn-secondary"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
      >
        <span>Explore Portfolio</span>
        <FaArrowRight />
      </motion.a>

    </div>
  );
}