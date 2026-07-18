import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./RotatingServices.css";

const services = [
  "Professional Websites",
  "Search Engine Optimization",
  "Brand Identity Design",
  "Social Media Marketing",
  "AI Business Solutions",
  "E-Commerce Development",
];

export default function RotatingServices() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % services.length);
    }, 2800);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="rotating-box">

      <p>Currently Specializing In</p>

      <div className="rotating-service">

        <AnimatePresence mode="wait">

          <motion.h3
            key={services[index]}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: .45 }}
          >
            {services[index]}
          </motion.h3>

        </AnimatePresence>

      </div>

    </div>
  );
}