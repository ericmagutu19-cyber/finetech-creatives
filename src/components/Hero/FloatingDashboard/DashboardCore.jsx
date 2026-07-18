import { motion } from "framer-motion";
import logo from "../../../assets/finetech-logo.png";

import "./DashboardCore.css";

export default function DashboardCore() {

    return (

        <motion.div
            className="dashboard-core"

            animate={{
                y: [0, -6, 0]
            }}

            transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
            }}

        >

            {/* Background Glow */}

            <div className="core-glow"></div>

            {/* Animated Scan */}

            <div className="scan-line"></div>

            {/* Logo */}

            <img
                src={logo}
                alt="Fine Tech Creatives"
                className="core-logo"
            />

            <span className="core-company">

                FINE TECH CREATIVES

            </span>

            <h2>

                DIGITAL
                <br />
                ECOSYSTEM

            </h2>

            <p>

                Websites • Branding • SEO • AI Solutions

            </p>

            <div className="core-status">

                <span className="status-dot"></span>

                System Online

            </div>

        </motion.div>

    );

}