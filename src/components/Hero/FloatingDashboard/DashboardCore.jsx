import { motion } from "framer-motion";

import logo from "../../../assets/finetech-logo.png";

import "./DashboardCore.css";


export default function DashboardCore({

    activeModule = null,

    activeModuleData = null,

    systemState = "idle",

    energyBurst = false,

    impactFlash = false,

    isSystemActive = false,

}) {

    /* ======================================================
       CORE ACTIVITY
    ====================================================== */

    const active =

        activeModule !== null ||

        isSystemActive;


    /* ======================================================
       SYSTEM STATE HELPERS
    ====================================================== */

    const isForward =

        systemState === "forward";


    const isProcessing =

        systemState === "active";


    const isReturning =

        systemState === "return";


    const isBursting =

        systemState === "burst" ||

        energyBurst;


    /* ======================================================
       DYNAMIC CORE CLASSES
    ====================================================== */

    const coreClasses = [

        "dashboard-core",

        active
            ? "core-active"
            : "",

        isSystemActive
            ? "core-online"
            : "",

        isForward
            ? "core-forward"
            : "",

        isProcessing
            ? "core-processing"
            : "",

        isReturning
            ? "core-return"
            : "",

        isBursting
            ? "core-burst"
            : "",

    ]
        .filter(Boolean)
        .join(" ");


    /* ======================================================
       DYNAMIC STATUS
    ====================================================== */

    const getCoreStatus = () => {

        if (isBursting) {

            return "Data Synchronized";

        }


        if (isReturning) {

            return "Receiving Data";

        }


        if (isProcessing) {

            return "Processing Request";

        }


        if (isForward) {

            return "Transmitting Data";

        }


        if (active) {

            return "System Active";

        }


        return "System Online";

    };


    /* ======================================================
       CORE SCALE BEHAVIOUR
    ====================================================== */

    const getCoreScale = () => {

        if (isBursting) {

            return [
                1,
                1.12,
                1.04,
                1,
            ];

        }


        if (isReturning) {

            return [
                1,
                1.045,
                1,
            ];

        }


        if (isProcessing) {

            return [
                1,
                1.035,
                1,
            ];

        }


        if (isForward) {

            return [
                1,
                1.025,
                1,
            ];

        }


        if (active) {

            return [
                1,
                1.02,
                1,
            ];

        }


        return [
            1,
            1.01,
            1,
        ];

    };


    /* ======================================================
       CORE ANIMATION SPEED
    ====================================================== */

    const getCoreDuration = () => {

        if (isBursting) {

            return 0.9;

        }


        if (isReturning) {

            return 0.8;

        }


        if (isProcessing) {

            return 1.2;

        }


        if (isForward) {

            return 1.4;

        }


        return active
            ? 2.8
            : 6;

    };


    return (

        <motion.div

            className={coreClasses}

            animate={{

                y: active
                    ? [0, -5, 0]
                    : [0, -3, 0],

                scale: getCoreScale(),

            }}

            transition={{

                y: {

                    duration: active
                        ? 2.8
                        : 6,

                    repeat: Infinity,

                    ease: "easeInOut",

                },

                scale: {

                    duration: getCoreDuration(),

                    repeat: isBursting
                        ? 0
                        : Infinity,

                    ease: "easeInOut",

                },

            }}

        >

            {/* ==================================================
                AMBIENT REACTOR GLOW
            ================================================== */}

            <div

                className={`

                    core-glow

                    ${

                        isBursting
                            ? "core-glow-burst"
                            : ""

                    }

                `}

            />
            {/* ==================================================
    HOLOGRAPHIC REACTOR RINGS
================================================== */}

<div
    className={`
        core-hologram
        ${isForward ? "hologram-forward" : ""}
        ${isProcessing ? "hologram-processing" : ""}
        ${isReturning ? "hologram-return" : ""}
        ${isBursting ? "hologram-burst" : ""}
    `}
>

    {/* Outer clockwise ring */}

    <div className="hologram-ring hologram-ring-outer">

        <span className="ring-node ring-node-one" />

        <span className="ring-node ring-node-two" />

        <span className="ring-node ring-node-three" />

    </div>


    {/* Inner counter-clockwise ring */}

    <div className="hologram-ring hologram-ring-inner">

        <span className="ring-node ring-node-four" />

        <span className="ring-node ring-node-five" />

    </div>


    {/* Central reactor disc */}

    <div className="hologram-reactor-disc" />

</div>
                {/* ==================================================
    RETURN PACKET IMPACT FLASH
================================================== */}

{impactFlash && (
    <div className="core-impact-flash">

        <span className="core-impact-center" />

        <span className="core-impact-ray core-impact-ray-one" />

        <span className="core-impact-ray core-impact-ray-two" />

        <span className="core-impact-ray core-impact-ray-three" />

        <span className="core-impact-ray core-impact-ray-four" />

    </div>
)}
            {/* ==================================================
                ENERGY BURST RIPPLES
            ================================================== */}

            {isBursting && (

                <>

                    <div className="core-burst-ring core-burst-ring-one" />

                    <div className="core-burst-ring core-burst-ring-two" />

                </>

            )}


            {/* ==================================================
                ANIMATED REFLECTION
            ================================================== */}

            <div

                className={`

                    core-reflection

                    ${

                        isProcessing
                            ? "reflection-processing"
                            : ""

                    }

                `}

            />


            {/* ==================================================
                REACTOR SCANNER
            ================================================== */}

            <div

                className={`

                    scan-line

                    ${

                        isSystemActive
                            ? "scan-active"
                            : ""

                    }

                    ${

                        isProcessing
                            ? "scan-processing"
                            : ""

                    }

                `}

            />


            {/* ==================================================
                PULSE RING
            ================================================== */}

            <div

                className={`

                    core-pulse

                    ${

                        active
                            ? "pulse-active"
                            : ""

                    }

                    ${

                        isReturning
                            ? "pulse-receiving"
                            : ""

                    }

                    ${

                        isBursting
                            ? "pulse-burst"
                            : ""

                    }

                `}

            />


            {/* ==================================================
                DIGITAL CORE LOGO
            ================================================== */}

            <motion.img

                src={logo}

                alt="Fine Tech Creatives"

                className={`

                    core-logo

                    ${

                        isBursting
                            ? "core-logo-burst"
                            : ""

                    }

                `}

                animate={{

                    scale: isBursting

                        ? [
                            1,
                            1.35,
                            1.08,
                            1,
                        ]

                        : active

                            ? [
                                1,
                                1.08,
                                1,
                            ]

                            : [
                                1,
                                1.03,
                                1,
                            ],

                    rotate: isProcessing

                        ? [
                            0,
                            1.5,
                            -1.5,
                            0,
                        ]

                        : active

                            ? [
                                0,
                                1,
                                -1,
                                0,
                            ]

                            : [
                                0,
                                0.5,
                                0,
                            ],

                    filter: isBursting

                        ? [

                            "drop-shadow(0 0 12px rgba(255,255,255,.8)) drop-shadow(0 0 24px rgba(200,255,0,.9))",

                            "drop-shadow(0 0 28px rgba(255,255,255,1)) drop-shadow(0 0 55px rgba(200,255,0,1))",

                            "drop-shadow(0 0 12px rgba(255,255,255,.7)) drop-shadow(0 0 24px rgba(200,255,0,.8))",

                        ]

                        : active

                            ? [

                                "drop-shadow(0 0 10px rgba(200,255,0,.4))",

                                "drop-shadow(0 0 26px rgba(200,255,0,.9))",

                                "drop-shadow(0 0 10px rgba(200,255,0,.4))",

                            ]

                            : [

                                "drop-shadow(0 0 8px rgba(200,255,0,.25))",

                                "drop-shadow(0 0 16px rgba(200,255,0,.45))",

                                "drop-shadow(0 0 8px rgba(200,255,0,.25))",

                            ],

                }}

                transition={{

                    duration: isBursting

                        ? 0.8

                        : active

                            ? 1.5

                            : 4,

                    repeat: isBursting
                        ? 0
                        : Infinity,

                    ease: "easeInOut",

                }}

            />


            {/* ==================================================
                COMPANY NAME
            ================================================== */}

            <span className="core-company">

                FINE TECH CREATIVES

            </span>


            {/* ==================================================
                DIGITAL ECOSYSTEM TITLE
            ================================================== */}

            <h2>

                DIGITAL

                <br />

                ECOSYSTEM

            </h2>


            {/* ==================================================
                SERVICES
            ================================================== */}

            <p>

                Websites • Branding • SEO • AI Solutions

            </p>


            {/* ==================================================
                LIVE SYSTEM STATUS
            ================================================== */}

            <div

                className={`

                    core-status

                    ${

                        isSystemActive
                            ? "core-status-active"
                            : ""

                    }

                    ${

                        isBursting
                            ? "core-status-burst"
                            : ""

                    }

                `}

            >

                <span

                    className={`

                        status-dot

                        ${

                            isSystemActive
                                ? "status-dot-active"
                                : ""

                        }

                        ${

                            isBursting
                                ? "status-dot-burst"
                                : ""

                        }

                    `}

                />

                {getCoreStatus()}

            </div>

        </motion.div>

    );

}