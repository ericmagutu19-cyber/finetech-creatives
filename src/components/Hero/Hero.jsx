import { motion } from "framer-motion";
import HeroBadge from "./HeroBadge";
import HeroHeadline from "./HeroHeadline";
import HeroDescription from "./HeroDescription";
import RotatingServices from "./RotatingServices";
import HeroButtons from "./HeroButtons";
import TrustPills from "./TrustPills";
import FloatingDashboard from "./FloatingDashboard/FloatingDashboard";

import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-section">

      <div className="hero-overlay"></div>

      <div className="container hero-grid">

        {/* LEFT */}

        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >

          <HeroBadge />

          <HeroHeadline />

          <HeroDescription />

          <RotatingServices />

          <HeroButtons />

          <TrustPills />

        </motion.div>

        {/* RIGHT */}

        <motion.div
  className="hero-right"
  initial={{ opacity: 0, x: 60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{
    duration: 0.8,
    delay: 0.25,
    ease: "easeOut",
  }}
>
  <FloatingDashboard />
</motion.div>

      </div>

    </section>
  );
}