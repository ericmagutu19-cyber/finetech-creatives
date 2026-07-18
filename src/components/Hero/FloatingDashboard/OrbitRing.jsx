import { motion } from "framer-motion";

import "./OrbitRing.css";

export default function OrbitRing() {

  return (

    <div className="orbit-system">

      {/* Outer Ring */}

      <motion.div
        className="orbit-ring orbit-outer"
        animate={{ rotate: 360 }}
        transition={{
          duration: 70,
          repeat: Infinity,
          ease: "linear"
        }}
      >

        <span className="orbit-node node-a"></span>
        <span className="orbit-node node-b"></span>

      </motion.div>

      {/* Middle Ring */}

      <motion.div
        className="orbit-ring orbit-middle"
        animate={{ rotate: -360 }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear"
        }}
      >

        <span className="orbit-node node-c"></span>

      </motion.div>

      {/* Inner Ring */}

      <motion.div
        className="orbit-ring orbit-inner"
        animate={{ rotate: 360 }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear"
        }}
      >

        <span className="orbit-node node-d"></span>

      </motion.div>

    </div>

  );

}