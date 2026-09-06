/* ==========================================================
   DASHBOARD CONNECTIONS
   Fine Tech Creatives

   Digital Ecosystem Packet Network
========================================================== */

import { useEffect, useState } from "react";

import "./ConnectionLines.css";


/* ==========================================================
   CONNECTION CONFIGURATION
==========================================================

   IMPORTANT:

   These IDs correspond directly to the four modules
   inside FloatingDashboard.jsx.

   1 → Web Platform
   2 → Search Growth
   3 → Brand Identity
   4 → AI Solutions

   The SVG path coordinates are NOT changed here.

========================================================== */

const CONNECTIONS = [

    {
        id: 1,

        name: "Web Platform",

        pathId: "line1",

        className: "connection-web",

        forwardDuration: "1.4s",

        returnDuration: "1.1s",

    },

    {
        id: 2,

        name: "Search Growth",

        pathId: "line2",

        className: "connection-seo",

        forwardDuration: "1.6s",

        returnDuration: "1.2s",

    },

    {
        id: 3,

        name: "Brand Identity",

        pathId: "line3",

        className: "connection-brand",

        forwardDuration: "1.5s",

        returnDuration: "1.1s",

    },

    {
        id: 4,

        name: "AI Solutions",

        pathId: "line4",

        className: "connection-ai",

        forwardDuration: "1.3s",

        returnDuration: "1s",

    },

];


/* ==========================================================
   SYSTEM STATES
========================================================== */

const SYSTEM_STATES = {

    IDLE: "idle",

    FORWARD: "forward",

    ACTIVE: "active",

    RETURN: "return",

    BURST: "burst",

};
/* ==========================================================
   DASHBOARD CONNECTION COMPONENT
========================================================== */

export default function DashboardConnections({

    activeModule = null,

    systemState = SYSTEM_STATES.IDLE,

    packetDirection = "idle",

    energyBurst = false,

    impactFlash = false,

    isSystemActive = false,

    /* ======================================================
       MOBILE PERFORMANCE MODE
    ====================================================== */

    isMobile = false,

}) {
        /* ======================================================
       ACTIVE CONNECTION
    ====================================================== */

    const [activeConnection, setActiveConnection] = useState(
        null
    );


    /* ======================================================
       CORE BURST CONNECTION
    ====================================================== */

    const [burstConnection, setBurstConnection] = useState(
        null
    );


    /* ======================================================
       PACKET ANIMATION CYCLE
    ======================================================

       Incrementing this value forces a new packet
       animation whenever the active module changes.

    ====================================================== */

    const [packetCycle, setPacketCycle] = useState(
        0
    );


    /* ======================================================
       FIND ACTIVE CONNECTION
    ====================================================== */

    const activeConnectionData =

        CONNECTIONS.find(

            (connection) =>

                connection.id === activeModule

        ) || null;
            /* ======================================================
       SYNCHRONIZE ACTIVE MODULE
    ====================================================== */

    useEffect(() => {

        /* ----------------------------------------------
           No active module
        ---------------------------------------------- */

        if (

            activeModule === null ||

            activeModule === undefined

        ) {

            setActiveConnection(
                null
            );

            return;

        }


        /* ----------------------------------------------
           Activate matching connection
        ---------------------------------------------- */

        setActiveConnection(

            activeModule

        );


        /* ----------------------------------------------
           Restart packet animation
        ---------------------------------------------- */

        setPacketCycle(

            previous =>

                previous + 1

        );

    }, [

        activeModule,

    ]);
        /* ======================================================
       CORE ENERGY BURST
    ====================================================== */

    useEffect(() => {

        /* ----------------------------------------------
           No burst
        ---------------------------------------------- */

        if (!energyBurst) {

            setBurstConnection(
                null
            );

            return;

        }


        /* ----------------------------------------------
           Activate burst on current connection
        ---------------------------------------------- */

        setBurstConnection(

            activeModule

        );


        /* ----------------------------------------------
           Remove burst after animation
        ---------------------------------------------- */

        const burstTimer = setTimeout(() => {

            setBurstConnection(
                null
            );

        }, 1200);


        return () => {

            clearTimeout(
                burstTimer
            );

        };

    }, [

        energyBurst,

        activeModule,

    ]);
        /* ======================================================
       CONNECTION STATE HELPERS
    ====================================================== */


    /* ======================================================
       IS ACTIVE CONNECTION?
    ====================================================== */

    const isActiveConnection = (

        connectionId

    ) => {

        return (

            activeConnection === connectionId

        );

    };


    /* ======================================================
       IS FORWARD FLOW?
    ====================================================== */

    const isForwardFlow = (

        connectionId

    ) => {

        return (

            activeConnection === connectionId &&

            packetDirection === "forward"

        );

    };


    /* ======================================================
       IS RETURN FLOW?
    ====================================================== */

    const isReturnFlow = (

        connectionId

    ) => {

        return (

            activeConnection === connectionId &&

            packetDirection === "return"

        );

    };


    /* ======================================================
       IS CORE BURSTING?
    ====================================================== */

    const isBursting = (

        connectionId

    ) => {

        return (

            burstConnection === connectionId

        );

    };

    return (

        <svg
            className={`dashboard-connections-svg ${
                isMobile
                    ? "connections-mobile"
                    : ""
            }`}
            viewBox="0 0 900 760"
            preserveAspectRatio="none"
        >

                    {/* ==================================================
            SECTION 4 — SVG DEFINITIONS
        ================================================== */}

        <defs>

            {/* ==========================================
                BASE DATA PACKET
            ========================================== */}

            <circle
                id="packet"
                r="4"
                fill="#C8FF00"
            />

{/* ==========================================
    ACTIVE ENERGY PACKET
========================================== */}

{/* ==========================================
    ACTIVE ENERGY COMET PACKET
========================================== */}

<g id="activePacket">

    {/* Long outer trail */}

    <ellipse
        cx="-13"
        cy="0"
        rx="15"
        ry="3.2"
        fill="url(#packetTrailGradient)"
        opacity=".55"
    />


    {/* Inner bright trail */}

    <ellipse
        cx="-8"
        cy="0"
        rx="9"
        ry="2"
        fill="#C8FF00"
        opacity=".48"
    />


    {/* Outer energy halo */}

    <circle
        r="10"
        fill="#C8FF00"
        opacity=".14"
    />


    {/* Main neon body */}

    <circle
        r="5.5"
        fill="#C8FF00"
    />


    {/* Bright white core */}

    <circle
        r="2.4"
        fill="#FFFFFF"
    />


    {/* Front energy spark */}

    <circle
        cx="5"
        cy="0"
        r="1.4"
        fill="#FFFFFF"
        opacity=".9"
    />

</g>
{/* ==========================================
    PACKET TRAIL GRADIENT
========================================== */}

<linearGradient
    id="packetTrailGradient"
    x1="0%"
    y1="0%"
    x2="100%"
    y2="0%"
>

    <stop
        offset="0%"
        stopColor="#C8FF00"
        stopOpacity="0"
    />

    <stop
        offset="55%"
        stopColor="#C8FF00"
        stopOpacity=".35"
    />

    <stop
        offset="100%"
        stopColor="#FFFFFF"
        stopOpacity=".95"
    />

</linearGradient>

{/* ==========================================
    COMET PACKET GLOW FILTER
========================================== */}

<filter
    id="packetGlow"
    x="-300%"
    y="-300%"
    width="700%"
    height="700%"
    colorInterpolationFilters="sRGB"
>

    <feGaussianBlur
        in="SourceGraphic"
        stdDeviation={
            isMobile
                ? "2.2"
                : "3.8"
        }
        result="packetBlur"
    />

    <feFlood
        floodColor="#C8FF00"
        floodOpacity=".9"
        result="packetGlowColor"
    />

    <feComposite
        in="packetGlowColor"
        in2="packetBlur"
        operator="in"
        result="coloredPacketGlow"
    />

    <feMerge>

        <feMergeNode in="coloredPacketGlow" />

        <feMergeNode in="SourceGraphic" />

    </feMerge>

</filter>

            {/* ==========================================
                CORE ENERGY BURST
            ========================================== */}

            <radialGradient id="energyBurst">

                <stop
                    offset="0%"
                    stopColor="#C8FF00"
                    stopOpacity="1"
                />

                <stop
                    offset="45%"
                    stopColor="#C8FF00"
                    stopOpacity=".55"
                />

                <stop
                    offset="100%"
                    stopColor="#C8FF00"
                    stopOpacity="0"
                />

            </radialGradient>

        </defs>

                    {/* ==================================================
            SECTION 5 — CURVED CONNECTION PATHS
        ================================================== */}

        {/* ==================================================
            WEB PLATFORM
            Card → Digital Core
        ================================================== */}

        <path
            id="line1"
            className={`
                connection-line
                connection-web

                ${
                    isActiveConnection(1)
                        ? "connection-active"
                        : ""
                }

                ${
                    isForwardFlow(1)
                        ? "connection-forward"
                        : ""
                }

                ${
                    isReturnFlow(1)
                        ? "connection-return"
                        : ""
                }

                ${
                    isBursting(1)
                        ? "connection-burst"
                        : ""
                }
            `}
            d="M180 145 C240 220 330 255 450 320"
        />


        {/* ==================================================
            SEARCH GROWTH / SEO
            Card → Digital Core
        ================================================== */}

        <path
            id="line2"
            className={`
                connection-line
                connection-seo

                ${
                    isActiveConnection(2)
                        ? "connection-active"
                        : ""
                }

                ${
                    isForwardFlow(2)
                        ? "connection-forward"
                        : ""
                }

                ${
                    isReturnFlow(2)
                        ? "connection-return"
                        : ""
                }

                ${
                    isBursting(2)
                        ? "connection-burst"
                        : ""
                }
            `}
            d="M720 145 C660 220 570 255 450 320"
        />


        {/* ==================================================
            BRAND IDENTITY
            Card → Digital Core
        ================================================== */}

        <path
            id="line3"
            className={`
                connection-line
                connection-brand

                ${
                    isActiveConnection(3)
                        ? "connection-active"
                        : ""
                }

                ${
                    isForwardFlow(3)
                        ? "connection-forward"
                        : ""
                }

                ${
                    isReturnFlow(3)
                        ? "connection-return"
                        : ""
                }

                ${
                    isBursting(3)
                        ? "connection-burst"
                        : ""
                }
            `}
            d="M180 615 C250 540 330 480 450 440"
        />


        {/* ==================================================
            AI SOLUTIONS
            Card → Digital Core
        ================================================== */}

        <path
            id="line4"
            className={`
                connection-line
                connection-ai

                ${
                    isActiveConnection(4)
                        ? "connection-active"
                        : ""
                }

                ${
                    isForwardFlow(4)
                        ? "connection-forward"
                        : ""
                }

                ${
                    isReturnFlow(4)
                        ? "connection-return"
                        : ""
                }

                ${
                    isBursting(4)
                        ? "connection-burst"
                        : ""
                }
            `}
            d="M720 615 C650 540 570 480 450 440"
        />

                    {/* ==================================================
            SECTION 7A — REVERSE PACKET PATHS
        ================================================== */}

        {/* ==================================================
            WEB PLATFORM
            Digital Core → Web Platform
        ================================================== */}

        <path
            id="line1-forward"
            className="connection-packet-path"
            d="M450 320 C330 255 240 220 180 145"
        />


        {/* ==================================================
            SEARCH GROWTH / SEO
            Digital Core → Search Growth
        ================================================== */}

        <path
            id="line2-forward"
            className="connection-packet-path"
            d="M450 320 C570 255 660 220 720 145"
        />


        {/* ==================================================
            BRAND IDENTITY
            Digital Core → Brand Identity
        ================================================== */}

        <path
            id="line3-forward"
            className="connection-packet-path"
            d="M450 440 C330 480 250 540 180 615"
        />


        {/* ==================================================
            AI SOLUTIONS
            Digital Core → AI Solutions
        ================================================== */}

        <path
            id="line4-forward"
            className="connection-packet-path"
            d="M450 440 C570 480 650 540 720 615"
        />        
                    {/* ==================================================
            SECTION 6 — CONTINUOUS BACKGROUND PACKETS
            Desktop only for mobile performance
        ================================================== */}

        {/* ==================================================
            CONTINUOUS BACKGROUND PACKETS

            Desktop only:
            These four indefinite SVG animations are disabled
            on mobile to reduce continuous paint / animation work.

            Active forward and return packets remain enabled.
        ================================================== */}

        {!isMobile && (

            <>

        {/* ==================================================
            WEB PLATFORM BACKGROUND PACKET
        ================================================== */}

        <use
            href="#packet"
            className="connection-packet packet-web"
            opacity=".55"
        >

            <animateMotion
                dur="3s"
                repeatCount="indefinite"
                rotate="auto"
            >

                <mpath
                    href="#line1"
                />

            </animateMotion>

        </use>


        {/* ==================================================
            SEARCH GROWTH / SEO BACKGROUND PACKET
        ================================================== */}

        <use
            href="#packet"
            className="connection-packet packet-seo"
            opacity=".55"
        >

            <animateMotion
                dur="3.8s"
                repeatCount="indefinite"
                rotate="auto"
            >

                <mpath
                    href="#line2"
                />

            </animateMotion>

        </use>


        {/* ==================================================
            BRAND IDENTITY BACKGROUND PACKET
        ================================================== */}

        <use
            href="#packet"
            className="connection-packet packet-brand"
            opacity=".55"
        >

            <animateMotion
                dur="3.4s"
                repeatCount="indefinite"
                rotate="auto"
            >

                <mpath
                    href="#line3"
                />

            </animateMotion>

        </use>


        {/* ==================================================
            AI SOLUTIONS BACKGROUND PACKET
        ================================================== */}

        <use
            href="#packet"
            className="connection-packet packet-ai"
            opacity=".55"
        >

            <animateMotion
                dur="2.8s"
                repeatCount="indefinite"
                rotate="auto"
            >

                <mpath
                    href="#line4"
                />

            </animateMotion>

        </use>

            </>

        )}

                    {/* ==================================================
            SECTION 7B — ACTIVE FORWARD ENERGY PACKET
        ================================================== */}

        {
            activeConnectionData &&
            isForwardFlow(activeConnectionData.id) && (

            <use

                key={`forward-packet-${

                    activeConnectionData.id

                }-${packetCycle}`}

                href="#activePacket"

                className={`

                    active-energy-packet

                    ${activeConnectionData.className}

                `}

                filter="url(#packetGlow)"

            >

                <animateMotion

                    dur={

                        activeConnectionData.forwardDuration

                    }

                    fill="freeze"

                    rotate="auto"

                >

                    <mpath

                        href={

                            `#${

                                activeConnectionData.pathId

                            }-forward`

                        }

                    />

                </animateMotion>

            </use>
                
        )}
                {/* ==================================================
            SECTION 8 — ACTIVE RETURN ENERGY PACKET
        ================================================== */}

        {
            activeConnectionData &&

            isReturnFlow(
                activeConnectionData.id
            ) && (

                <use

                    key={

                        `return-packet-${

                            activeConnectionData.id

                        }-${packetCycle}`

                    }

                    href="#activePacket"

                    className={`

    return-energy-packet

    ${activeConnectionData.className}

    ${
        impactFlash
            ? "return-packet-impacting"
            : ""
    }

`}

                    filter="url(#packetGlow)"

                >

                    <animateMotion

                        dur={

                            activeConnectionData.returnDuration

                        }

                        fill="freeze"

                        rotate="auto"

                    >

                        <mpath

                            href={

                                `#${

                                    activeConnectionData.pathId

                                }`

                            }

                        />

                    </animateMotion>

                </use>

            )
        }
        </svg>

    );

}