import { motion } from "framer-motion";
import "./HeroHeadline.css";
export default function HeroHeadline() {
  return (
    <motion.div
      className="hero-headline"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1>
        Building
        <br />
        Digital
        <br />
        Experiences
        <br />
        That Help
        <br />
        Businesses
        <br />
        <span>Grow.</span>
      </h1>
    </motion.div>
  );
}