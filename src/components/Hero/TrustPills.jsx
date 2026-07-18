import { motion } from "framer-motion";
import {
  FaSearch,
  FaMobileAlt,
  FaBolt,
  FaHeadset
} from "react-icons/fa";

import "./TrustPills.css";

const pills = [
  {
    icon: <FaSearch />,
    text: "SEO Optimized"
  },
  {
    icon: <FaMobileAlt />,
    text: "Mobile First"
  },
  {
    icon: <FaBolt />,
    text: "Lightning Fast"
  },
  {
    icon: <FaHeadset />,
    text: "Ongoing Support"
  }
];

export default function TrustPills() {
  return (
    <div className="trust-pills">

      {pills.map((pill, index) => (

        <motion.div
          key={index}
          className="trust-pill"
          whileHover={{
            y: -4,
            scale: 1.04
          }}
        >

          <span className="trust-icon">
            {pill.icon}
          </span>

          <span>
            {pill.text}
          </span>

        </motion.div>

      ))}

    </div>
  );
}