import { motion } from "framer-motion";

import "./DashboardCard.css";

export default function DashboardCard({

    icon,
    title,
    subtitle,
    status,
    className,
    active,
    onMouseEnter,
    onMouseLeave,

}) {

    return (

        <motion.div

            className={`dashboard-card ${className} ${active ? "active" : ""}`}

            onMouseEnter={onMouseEnter}

            onMouseLeave={onMouseLeave}

            animate={{

                y: active ? -8 : 0,

                scale: active ? 1.04 : 1,

            }}

            whileHover={{

                scale: 1.06,

                y: -10,

            }}

            transition={{

                duration: .35,

                ease: "easeOut",

            }}

        >

            {/* Glow Layer */}

            <div className="card-glow"></div>

            {/* Top Accent */}

            <div className="card-top-bar"></div>

            {/* Icon */}

            <motion.div
    className={`
        dashboard-icon

        ${title === "Web Platform" ? "icon-web" : ""}

        ${title === "Search Growth" ? "icon-seo" : ""}

        ${title === "Brand Identity" ? "icon-brand" : ""}

        ${title === "AI Solutions" ? "icon-ai" : ""}

        ${active ? "icon-active" : ""}
    `}

    animate={{
        rotate: active
            ? [0, -5, 5, 0]
            : 0,

        scale: active
            ? [1, 1.15, 1]
            : 1,
    }}

    transition={{
        duration: 1.2,

        repeat: active
            ? Infinity
            : 0,

        ease: "easeInOut",
    }}
>
    {icon}
</motion.div>

            {/* Title */}

            <h3>{title}</h3>

            {/* Subtitle */}

            <p>{subtitle}</p>

            {/* Status */}

            <div className="dashboard-status">

                <span className="status-light"></span>

                <span>{status}</span>

            </div>

        </motion.div>

    );

}