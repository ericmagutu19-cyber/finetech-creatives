import { motion } from "framer-motion";
import "./OrbitParticles.css";

export default function OrbitParticles() {

    return (

        <>

            {/* Outer Satellite */}

            <motion.div
                className="orbit-particle orbit-particle-one"
                animate={{ rotate: 360 }}
                transition={{
                    duration: 24,
                    repeat: Infinity,
                    ease: "linear"
                }}
            >
                <span className="particle large"></span>
            </motion.div>

            {/* Middle Satellite */}

            <motion.div
                className="orbit-particle orbit-particle-two"
                animate={{ rotate: -360 }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear"
                }}
            >
                <span className="particle medium"></span>
            </motion.div>

            {/* Inner Satellite */}

            <motion.div
                className="orbit-particle orbit-particle-three"
                animate={{ rotate: 360 }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear"
                }}
            >
                <span className="particle small"></span>
            </motion.div>

        </>

    );

}