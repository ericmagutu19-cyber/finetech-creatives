/* ==========================================================
   FLOATING DASHBOARD
   Fine Tech Creatives
   Digital Ecosystem Engine V4

   SECTION 1 — IMPORTS
========================================================== */

import {
    useState,
    useEffect,
    useRef,
} from "react";

import {
    FaGlobeAmericas,
    FaChartLine,
    FaPalette,
    FaRobot,
} from "react-icons/fa";


/* ==========================================================
   DASHBOARD COMPONENTS
========================================================== */

import DashboardCard from "./DashboardCard";

import DashboardCore from "./DashboardCore";

import DashboardConnections from "./DashboardConnections";

import OrbitRing from "./OrbitRing";

import OrbitParticles from "./OrbitParticles";


/* ==========================================================
   STYLES
========================================================== */

import "./FloatingDashboard.css";
/* ==========================================================
   SECTION 2 — DIGITAL ECOSYSTEM MODULE CONFIGURATION
========================================================== */

/*
    Each module represents one of the four major
    Fine Tech Creatives digital services.

    The same module data will later control:

    • Dashboard Card
    • Connection Line
    • Packet Animation
    • Core Interaction
    • Status Messages
    • Energy Burst
    • Hover State
*/


const modules = [

    /* ======================================================
       MODULE 1 — WEB PLATFORM
    ====================================================== */

    {
        id: 1,

        key: "web",

        icon: <FaGlobeAmericas />,

        title: "Web Platform",

        subtitle: "Modern Experiences",

        className: "module-top-left",

        /*
            Status cycle

            The card can transition through
            these states when activated.
        */

        statuses: [

            "ONLINE",

            "DEPLOYING",

            "LIVE",

        ],

        /*
            Packet behavior

            Used later by DashboardConnections
            to control the visual packet flow.
        */

        packetLabel: "WEB DATA",

        packetColor: "lime",

    },


    /* ======================================================
       MODULE 2 — SEARCH GROWTH
    ====================================================== */

    {
        id: 2,

        key: "seo",

        icon: <FaChartLine />,

        title: "Search Growth",

        subtitle: "SEO Optimized",

        className: "module-top-right",

        statuses: [

            "INDEXING",

            "RANKING",

            "OPTIMIZED",

        ],

        packetLabel: "SEO DATA",

        packetColor: "lime",

    },


    /* ======================================================
       MODULE 3 — BRAND IDENTITY
    ====================================================== */

    {
        id: 3,

        key: "brand",

        icon: <FaPalette />,

        title: "Brand Identity",

        subtitle: "Creative Systems",

        className: "module-bottom-left",

        statuses: [

            "DESIGNING",

            "RENDERING",

            "READY",

        ],

        packetLabel: "BRAND DATA",

        packetColor: "lime",

    },


    /* ======================================================
       MODULE 4 — AI SOLUTIONS
    ====================================================== */

    {
        id: 4,

        key: "ai",

        icon: <FaRobot />,

        title: "AI Solutions",

        subtitle: "Business Automation",

        className: "module-bottom-right",

        statuses: [

            "LEARNING",

            "PROCESSING",

            "ACTIVE",

        ],

        packetLabel: "AI DATA",

        packetColor: "lime",

    },

];
/* ==========================================================
   SECTION 3 — DIGITAL ECOSYSTEM SYSTEM STATE
========================================================== */


/*
    SYSTEM STATES

    idle
    ─────────────────────────────
    The ecosystem is resting.
    The core is breathing.
    Orbit animations continue.


    forward
    ─────────────────────────────
    A packet is travelling from
    the Digital Core toward the
    active module.


    active
    ─────────────────────────────
    The packet has reached the
    selected module.

    The module is processing data.
    The card becomes visually active.


    return
    ─────────────────────────────
    The packet is travelling from
    the module back toward the core.


    burst
    ─────────────────────────────
    The packet has returned.

    The Digital Core receives the
    energy and produces a pulse.
*/


const SYSTEM_STATES = {

    IDLE: "idle",

    FORWARD: "forward",

    ACTIVE: "active",

    RETURN: "return",

    BURST: "burst",

};


/* ==========================================================
   COMPONENT STATE
========================================================== */

export default function FloatingDashboard() {


    /* ======================================================
       ACTIVE MODULE
    ======================================================

       Stores the numeric ID of the module
       currently connected to the Digital Core.

       1 = Web Platform
       2 = Search Growth
       3 = Brand Identity
       4 = AI Solutions

    ====================================================== */

    const [activeModule, setActiveModule] = useState(1);


    /* ======================================================
   SYSTEM STATE
======================================================

   Controls the current stage of the
   Digital Ecosystem interaction.

====================================================== */

const [systemState, setSystemState] = useState(
    SYSTEM_STATES.IDLE
);


/* ======================================================
   PACKET DIRECTION
======================================================

   Controls the direction of the
   animated data packets.

   idle
   forward
   return

====================================================== */

const [packetDirection, setPacketDirection] = useState(
    "idle"
);


/* ======================================================
   ENERGY BURST
======================================================

   Controls the energy pulse that occurs
   when a packet returns to the Digital Core.

====================================================== */

const [energyBurst, setEnergyBurst] = useState(false);


/* ======================================================
   SYSTEM ACTIVITY
======================================================

   Tracks whether the Digital Ecosystem
   is currently transmitting, processing,
   returning data, or producing a burst.

====================================================== */

const [isSystemActive, setIsSystemActive] = useState(false);


/* ======================================================
   AUTO ROTATION
====================================================== */

const [autoRotate, setAutoRotate] = useState(true);

/* ======================================================
   MOBILE PERFORMANCE MODE
====================================================== */

const [isMobile, setIsMobile] = useState(false);

    /* ======================================================
       STATUS STAGE
    ======================================================

       Each module contains three status states.

       Example:

       INDEXING
          ↓
       RANKING
          ↓
       OPTIMIZED

       This value determines which stage
       is currently displayed.

       0 = Initial
       1 = Processing
       2 = Complete

    ====================================================== */

    const [statusIndex, setStatusIndex] = useState(0);
    const [impactFlash, setImpactFlash] = useState(false);

    /* ======================================================
       ANIMATION TIMERS
    ======================================================

       These refs store timers so they can
       be cancelled safely.

       This prevents:

       • overlapping animations
       • delayed state changes
       • memory leaks
       • packets continuing after hover ends

    ====================================================== */

    const rotationTimer = useRef(null);

    const packetTimer = useRef(null);

    const statusTimer = useRef(null);

    const burstTimer = useRef(null);

    const impactTimer = useRef(null);
    
    /* ======================================================
       CURRENT ACTIVE MODULE DATA
    ======================================================

       This allows the rest of the controller
       to access the complete data object
       for the currently active module.

    ====================================================== */

    const activeModuleData = modules.find(

        (module) => module.id === activeModule

    );

    /* ======================================================
       PACKET ACTIVITY CHECK
    ====================================================== */

    const isPacketMoving =

        packetDirection !== "idle";


    /* ======================================================
       CORE BURST CHECK
    ====================================================== */

    const isCoreBursting =

        systemState === SYSTEM_STATES.BURST ||

        energyBurst;
/* ==========================================================
   SECTION 4 — DIGITAL ECOSYSTEM ANIMATION ENGINE
========================================================== */


/* ==========================================================
   AUTO ROTATION ENGINE
==========================================================

   Automatically cycles through the four
   ecosystem modules.

   Sequence:

   WEB
     ↓
   SEO
     ↓
   BRAND
     ↓
   AI
     ↓
   WEB

   The rotation pauses when the user
   interacts with a card.

========================================================== */
useEffect(() => {
  const mobileQuery = window.matchMedia(
    "(max-width: 768px)"
  );

  const updateRotationMode = () => {
    const mobile = mobileQuery.matches;

    setIsMobile(mobile);
    setAutoRotate(!mobile);
  };

  updateRotationMode();

  mobileQuery.addEventListener(
    "change",
    updateRotationMode
  );

  return () => {
    mobileQuery.removeEventListener(
      "change",
      updateRotationMode
    );
  };
}, []); 

useEffect(() => {

    /* ----------------------------------------------
       Mobile devices do not need automatic rotation.
       Avoid interval-driven React updates on mobile.
    ---------------------------------------------- */

    if (isMobile || !autoRotate) {

        return;

    }


    /* ----------------------------------------------
       Clear any existing timer
    ---------------------------------------------- */

    clearInterval(rotationTimer.current);


    /* ----------------------------------------------
       Start rotation cycle
    ---------------------------------------------- */

    rotationTimer.current = setInterval(() => {

        setActiveModule((currentModule) => {

            /* ------------------------------------------
               Move to next module

               After module 4,
               return to module 1.
            ------------------------------------------ */

            if (currentModule >= modules.length) {

                return 1;

            }

            return currentModule + 1;

        });

    }, 5000);


    /* ----------------------------------------------
       Cleanup
    ---------------------------------------------- */

    return () => {

        clearInterval(
            rotationTimer.current
        );

    };

}, [autoRotate, isMobile]);

/* ==========================================================
   ACTIVE MODULE PACKET CYCLE

   Synchronizes each active module with:

   1. Core → Card
   2. Card processing
   3. Card → Core
   4. Core energy burst
   5. Idle period before the next rotation
========================================================== */

useEffect(() => {

    /* ----------------------------------------------
       Mobile performance mode

       Keep the dashboard visible, but stop the
       multi-step JavaScript packet choreography.
    ---------------------------------------------- */

    if (isMobile) {
        return;
    }

    if (
        activeModule === null ||
        activeModule === undefined
    ) {
        setSystemState("idle");
        setPacketDirection("idle");
        setEnergyBurst(false);
        setIsSystemActive(false);

        return;
    }

    /* ----------------------------------------------
       Reset the previous cycle
    ---------------------------------------------- */

    setEnergyBurst(false);
    setIsSystemActive(true);

    /* ----------------------------------------------
       PHASE 1: Core → active card
    ---------------------------------------------- */

    setSystemState("forward");
    setPacketDirection("forward");

    /* ----------------------------------------------
       PHASE 2: Card processes the packet
    ---------------------------------------------- */

    const processingTimer = setTimeout(() => {
    setSystemState("active");
    setPacketDirection("idle");
}, 1650);


/* ----------------------------------------------
   PHASE 3: Card → core
---------------------------------------------- */

const returnTimer = setTimeout(() => {
    setSystemState("return");
    setPacketDirection("return");
}, 2100);


/* ----------------------------------------------
   IMPACT FLASH
---------------------------------------------- */

const impactTimer = setTimeout(() => {
    setImpactFlash(true);
}, 3150);


/* ----------------------------------------------
   PHASE 4: Core receives returned packet
---------------------------------------------- */

const burstTimer = setTimeout(() => {
    setSystemState("burst");
    setEnergyBurst(true);
}, 3350);

const packetEndTimer = setTimeout(() => {

    setPacketDirection("idle");

}, 3480);

/* ----------------------------------------------
   END IMPACT FLASH
---------------------------------------------- */

const impactEndTimer = setTimeout(() => {
    setImpactFlash(false);
}, 3520);


/* ----------------------------------------------
   PHASE 5: Finish burst
---------------------------------------------- */

const burstEndTimer = setTimeout(() => {
    setEnergyBurst(false);
    setSystemState("active");
}, 4100);


/* ----------------------------------------------
   PHASE 6: Brief idle period before rotation
---------------------------------------------- */

const idleTimer = setTimeout(() => {
    setSystemState("idle");
    setPacketDirection("idle");
    setIsSystemActive(false);
}, 4550);

    /* ----------------------------------------------
       Cleanup whenever the active module changes
    ---------------------------------------------- */

    return () => {

    clearTimeout(processingTimer);

    clearTimeout(returnTimer);

    clearTimeout(impactTimer);

    clearTimeout(impactEndTimer);

    clearTimeout(burstTimer);

    clearTimeout(packetEndTimer);

    clearTimeout(burstEndTimer);

    clearTimeout(idleTimer);

};
}, [activeModule, isMobile]);
/* ==========================================================
   MODULE STATUS ENGINE
==========================================================

   When a new module becomes active:

   Stage 0
      ↓
   Initial status

   Stage 1
      ↓
   Processing

   Stage 2
      ↓
   Completed

   Example:

   INDEXING
      ↓
   RANKING
      ↓
   OPTIMIZED

========================================================== */

useEffect(() => {

    /* ----------------------------------------------
       Mobile performance mode

       Avoid status timers on mobile.
    ---------------------------------------------- */

    if (isMobile) {
        return;
    }

    /* ----------------------------------------------
       Reset status
    ---------------------------------------------- */

    setStatusIndex(0);


    /* ----------------------------------------------
       Clear previous timer
    ---------------------------------------------- */

    clearTimeout(
        statusTimer.current
    );


    /* ----------------------------------------------
       Stage 1
    ---------------------------------------------- */

    statusTimer.current = setTimeout(() => {

        setStatusIndex(1);

    }, 1200);


    /* ----------------------------------------------
       Stage 2
    ---------------------------------------------- */

    const completeTimer = setTimeout(() => {

        setStatusIndex(2);

    }, 2600);


    /* ----------------------------------------------
       Cleanup
    ---------------------------------------------- */

    return () => {

        clearTimeout(
            statusTimer.current
        );

        clearTimeout(
            completeTimer
        );

    };

}, [activeModule, isMobile]);


/* ==========================================================
   AUTOMATIC PACKET FLOW
==========================================================

   Every time the active module changes,
   the system performs:

   CORE
     ↓
   FORWARD PACKET
     ↓
   MODULE ACTIVE
     ↓
   RETURN PACKET
     ↓
   CORE BURST
     ↓
   IDLE

========================================================== */

useEffect(() => {

    /* ----------------------------------------------
       Mobile performance mode

       CSS keeps the dashboard visually alive while
       JavaScript packet choreography is paused.
    ---------------------------------------------- */

    if (isMobile) {
        return;
    }

    /* ----------------------------------------------
       TIMER REFERENCES FOR THIS ANIMATION CYCLE
    ---------------------------------------------- */

    let packetEndTimer = null;

    let burstEndTimer = null;


    /* ----------------------------------------------
       CLEAR TIMERS FROM THE PREVIOUS CYCLE
    ---------------------------------------------- */

    clearTimeout(
        packetTimer.current
    );

    clearTimeout(
        burstTimer.current
    );


    /* ----------------------------------------------
       RESET THE PREVIOUS ANIMATION
    ---------------------------------------------- */

    setEnergyBurst(false);

    setImpactFlash(false);

    setIsSystemActive(true);


    /* ----------------------------------------------
       STAGE 1 — SEND PACKET TO ACTIVE MODULE
    ---------------------------------------------- */

    setSystemState(
        SYSTEM_STATES.FORWARD
    );

    setPacketDirection(
        "forward"
    );


    /* ----------------------------------------------
       STAGE 2 — PACKET REACHES AND ACTIVATES CARD
    ---------------------------------------------- */

    packetTimer.current = setTimeout(() => {

        setSystemState(
            SYSTEM_STATES.ACTIVE
        );

    }, 1100);


    /* ----------------------------------------------
       STAGE 3 — PACKET RETURNS TO DIGITAL CORE
    ---------------------------------------------- */

    burstTimer.current = setTimeout(() => {

        setSystemState(
            SYSTEM_STATES.RETURN
        );

        setPacketDirection(
            "return"
        );

    }, 3000);


    /* ----------------------------------------------
       STAGE 4 — RETURN PACKET BEGINS IMPACT CHARGE
    ---------------------------------------------- */

    const impactTimer = setTimeout(() => {

        setImpactFlash(true);

    }, 3950);


    /* ----------------------------------------------
       STAGE 5 — PACKET IMPACTS DIGITAL CORE
    ---------------------------------------------- */

    const coreBurstTimer = setTimeout(() => {

        setSystemState(
            SYSTEM_STATES.BURST
        );

        setEnergyBurst(true);


        /* ------------------------------------------
           KEEP THE PACKET VISIBLE DURING IMPACT
        ------------------------------------------ */

        packetEndTimer = setTimeout(() => {

            setPacketDirection(
                "idle"
            );

        }, 180);


        /* ------------------------------------------
           END CORE ENERGY BURST
        ------------------------------------------ */

        burstEndTimer = setTimeout(() => {

            setImpactFlash(false);

            setEnergyBurst(false);

            setSystemState(
                SYSTEM_STATES.IDLE
            );

            setIsSystemActive(false);

        }, 1200);

    }, 4200);


    /* ----------------------------------------------
       CLEAN UP THE COMPLETE ANIMATION CYCLE
    ---------------------------------------------- */

    return () => {

        clearTimeout(
            packetTimer.current
        );

        clearTimeout(
            burstTimer.current
        );

        clearTimeout(
            impactTimer
        );

        clearTimeout(
            coreBurstTimer
        );

        clearTimeout(
            packetEndTimer
        );

        clearTimeout(
            burstEndTimer
        );

    };

}, [activeModule, isMobile]);


/* ==========================================================
   SYSTEM STATE SYNCHRONIZATION
==========================================================

   This keeps packet direction synchronized
   with the current system state.

   This acts as a safety layer so the
   visual packet system always knows
   what the ecosystem is doing.

========================================================== */

useEffect(() => {

    switch (systemState) {

        /* ------------------------------------------
           IDLE
        ------------------------------------------ */

        case SYSTEM_STATES.IDLE:

            setPacketDirection(
                "idle"
            );

            break;


        /* ------------------------------------------
           FORWARD
        ------------------------------------------ */

        case SYSTEM_STATES.FORWARD:

            setPacketDirection(
                "forward"
            );

            break;


        /* ------------------------------------------
           ACTIVE
        ------------------------------------------ */

        case SYSTEM_STATES.ACTIVE:

            setPacketDirection(
                "forward"
            );

            break;


        /* ------------------------------------------
           RETURN
        ------------------------------------------ */

        case SYSTEM_STATES.RETURN:

            setPacketDirection(
                "return"
            );

            break;


        /* ------------------------------------------
           BURST
        ------------------------------------------ */

        case SYSTEM_STATES.BURST:

            setPacketDirection(
                "idle"
            );

            break;


        /* ------------------------------------------
           DEFAULT
        ------------------------------------------ */

        default:

            setPacketDirection(
                "idle"
            );

    }

}, [systemState]);
/* ==========================================================
   SECTION 5 — USER INTERACTION CONTROLLER
========================================================== */


/* ==========================================================
   HANDLE MODULE HOVER
==========================================================

   When the user moves the mouse over a card:

   1. Stop automatic rotation
   2. Select the hovered module
   3. Reset the status cycle
   4. Start forward packet movement
   5. Activate the selected module

========================================================== */

const handleModuleEnter = (moduleId) => {

    /* ----------------------------------------------
       Mobile performance mode

       Keep card selection responsive without starting
       the timer-heavy packet choreography.
    ---------------------------------------------- */

    if (isMobile) {
        setAutoRotate(false);
        setActiveModule(moduleId);
        setStatusIndex(0);
        return;
    }

    /* ----------------------------------------------
       Stop automatic module rotation
    ---------------------------------------------- */

    setAutoRotate(false);


    /* ----------------------------------------------
       Clear any existing animation timers
    ---------------------------------------------- */

    clearTimeout(
        packetTimer.current
    );

    clearTimeout(
        burstTimer.current
    );

    clearTimeout(
        statusTimer.current
    );


    /* ----------------------------------------------
       Reset energy burst
    ---------------------------------------------- */

    setEnergyBurst(false);


    /* ----------------------------------------------
       Select hovered module
    ---------------------------------------------- */

    setActiveModule(
        moduleId
    );


    /* ----------------------------------------------
       Reset status
    ---------------------------------------------- */

    setStatusIndex(0);


    /* ----------------------------------------------
       Start forward packet flow
    ---------------------------------------------- */

    setSystemState(
        SYSTEM_STATES.FORWARD
    );

    setPacketDirection(
        "forward"
    );


    /* ----------------------------------------------
       Card becomes active after packet arrives
    ---------------------------------------------- */

    packetTimer.current = setTimeout(() => {

        setSystemState(
            SYSTEM_STATES.ACTIVE
        );

        setStatusIndex(1);

    }, 900);


    /* ----------------------------------------------
       Complete processing state
    ---------------------------------------------- */

    burstTimer.current = setTimeout(() => {

        setStatusIndex(2);

    }, 1800);

};


/* ==========================================================
   HANDLE MODULE LEAVE
==========================================================

   When the user moves the mouse away from a card:

   1. Stop the current packet animation
   2. Send the packet back toward the core
   3. Trigger a core energy burst
   4. Return the system to idle
   5. Resume automatic rotation

========================================================== */

const handleModuleLeave = () => {

    /* ----------------------------------------------
       Clear active timers
    ---------------------------------------------- */

    clearTimeout(
        packetTimer.current
    );

    clearTimeout(
        burstTimer.current
    );


    /* ----------------------------------------------
       Begin return journey
    ---------------------------------------------- */

    setSystemState(
        SYSTEM_STATES.RETURN
    );

    setPacketDirection(
        "return"
    );


    /* ----------------------------------------------
       Allow the return packet to travel
       back toward the core
    ---------------------------------------------- */
    /* ----------------------------------------------
   Create impact flash shortly before the
   packet reaches the Digital Core
---------------------------------------------- */

impactTimer.current = setTimeout(() => {

    setImpactFlash(true);

}, 820);


/* ----------------------------------------------
   Packet reaches the core
---------------------------------------------- */

packetTimer.current = setTimeout(() => {

    setPacketDirection("idle");

    setSystemState(
        SYSTEM_STATES.BURST
    );

    setEnergyBurst(true);

}, 900);


/* ----------------------------------------------
   Remove the short impact flash
---------------------------------------------- */

burstTimer.current = setTimeout(() => {

    setImpactFlash(false);

}, 1080);
    


    /* ----------------------------------------------
       End energy burst
    ---------------------------------------------- */

    burstTimer.current = setTimeout(() => {

        setEnergyBurst(
            false
        );

        setSystemState(
            SYSTEM_STATES.IDLE
        );


        /* ------------------------------------------
           Resume automatic rotation
        ------------------------------------------ */

        setAutoRotate(
            !isMobile
        );

    }, 2100);

};


/* ==========================================================
   HANDLE CARD FOCUS
==========================================================

   This function can be used for keyboard users.

   When a user focuses a card using keyboard
   navigation, we trigger the same behavior
   as a mouse hover.

========================================================== */

const handleModuleFocus = (moduleId) => {

    handleModuleEnter(
        moduleId
    );

};


/* ==========================================================
   HANDLE CARD BLUR
==========================================================

   When keyboard focus leaves the card,
   return the system to the normal ecosystem flow.

========================================================== */

const handleModuleBlur = () => {

    handleModuleLeave();

};


/* ==========================================================
   ACTIVE MODULE HELPERS
========================================================== */


/*
   Determine whether a specific module is
   currently active.
*/

const isModuleActive = (moduleId) => {

    return activeModule === moduleId;

};


/*
   Determine whether a specific module is
   currently receiving a packet.
*/

const isModuleReceiving = (moduleId) => {

    return (

        activeModule === moduleId &&

        (
            systemState === SYSTEM_STATES.FORWARD ||

            systemState === SYSTEM_STATES.ACTIVE
        )

    );

};


/*
   Determine whether a specific module is
   currently sending a packet back
   toward the Digital Core.
*/

const isModuleReturning = (moduleId) => {

    return (

        activeModule === moduleId &&

        systemState === SYSTEM_STATES.RETURN

    );

};


/*
   Determine the current status text
   for the active module.
*/

const getModuleStatus = (module) => {

    if (!module) {

        return "";

    }


    return (

        module.statuses?.[statusIndex] ||

        module.statuses?.[0] ||

        ""

    );

};
/* ==========================================================
   SECTION 6 — DIGITAL ECOSYSTEM DASHBOARD RENDER
========================================================== */


/* ==========================================================
   RENDER
========================================================== */

return (

    <section className="dashboard-stage">


        {/* ==================================================
            BACKGROUND ATMOSPHERE
        ================================================== */}

        <div
            className={`
                dashboard-background
                ${isSystemActive ? "system-active" : ""}
                ${isCoreBursting ? "core-bursting" : ""}
            `}
        />


        {/* ==================================================
            ORBIT SYSTEM
        ================================================== */}

        <div className="dashboard-orbit">

            <OrbitRing />

            <OrbitParticles />

        </div>


        {/* ==================================================
            MAIN DIGITAL ECOSYSTEM LAYOUT
        ================================================== */}

        <div className="dashboard-layout">


            {/* ==================================================
                SERVICE MODULES
            ================================================== */}

            {modules.map((module) => (

                <DashboardCard

                    key={module.id}


                    /* ------------------------------------------
                       MODULE POSITION
                    ------------------------------------------ */

                    className={
                        module.className
                    }


                    /* ------------------------------------------
                       ICON
                    ------------------------------------------ */

                    icon={
                        module.icon
                    }


                    /* ------------------------------------------
                       TITLE
                    ------------------------------------------ */

                    title={
                        module.title
                    }


                    /* ------------------------------------------
                       SUBTITLE
                    ------------------------------------------ */

                    subtitle={
                        module.subtitle
                    }


                    /* ------------------------------------------
                       STATUS

                       Example:

                       INDEXING
                       RANKING
                       OPTIMIZED
                    ------------------------------------------ */

                    status={
                        getModuleStatus(
                            module
                        )
                    }


                    /* ------------------------------------------
                       ACTIVE STATE
                    ------------------------------------------ */

                    active={
                        isModuleActive(
                            module.id
                        )
                    }


                    /* ------------------------------------------
                       PACKET RECEIVING
                    ------------------------------------------ */

                    receiving={
                        isModuleReceiving(
                            module.id
                        )
                    }


                    /* ------------------------------------------
                       PACKET RETURNING
                    ------------------------------------------ */

                    returning={
                        isModuleReturning(
                            module.id
                        )
                    }


                    /* ------------------------------------------
                       MOUSE INTERACTION
                    ------------------------------------------ */

                    onMouseEnter={() =>

                        handleModuleEnter(
                            module.id
                        )

                    }


                    onMouseLeave={

                        handleModuleLeave

                    }


                    /* ------------------------------------------
                       KEYBOARD ACCESSIBILITY
                    ------------------------------------------ */

                    onFocus={() =>

                        handleModuleFocus(
                            module.id
                        )

                    }


                    onBlur={

                        handleModuleBlur

                    }

                />

            ))}


            {/* ==================================================
                DIGITAL CORE
            ================================================== */}

            <div
                className={`
                    dashboard-center
                    ${isCoreBursting
                        ? "core-energy-active"
                        : ""
                    }
                `}
            >

                <DashboardCore

    /* ------------------------------------------
       ACTIVE MODULE
    ------------------------------------------ */

    activeModule={
        activeModule
    }


    /* ------------------------------------------
       ACTIVE MODULE DATA
    ------------------------------------------ */

    activeModuleData={
        activeModuleData
    }


    /* ------------------------------------------
       SYSTEM STATE
    ------------------------------------------ */

    systemState={
        systemState
    }


    /* ------------------------------------------
       ENERGY BURST
    ------------------------------------------ */

    energyBurst={
        energyBurst
    }


    /* ------------------------------------------
       IMPACT FLASH
    ------------------------------------------ */

    impactFlash={
        impactFlash
    }


    /* ------------------------------------------
       SYSTEM ACTIVITY
    ------------------------------------------ */

    isSystemActive={
        isSystemActive
    }

/>

            </div>


        </div>


        {/* ==================================================
            CONNECTION NETWORK
        ================================================== */}

        <DashboardConnections

    /* ----------------------------------------------
       ACTIVE MODULE
    ---------------------------------------------- */

    activeModule={
        activeModule
    }


    /* ----------------------------------------------
       ACTIVE MODULE DATA
    ---------------------------------------------- */

    activeModuleData={
        activeModuleData
    }


    /* ----------------------------------------------
       SYSTEM STATE
    ---------------------------------------------- */

    systemState={
        systemState
    }


    /* ----------------------------------------------
       PACKET DIRECTION
    ---------------------------------------------- */

    packetDirection={
        packetDirection
    }


    /* ----------------------------------------------
       ENERGY BURST
    ---------------------------------------------- */

    energyBurst={
        energyBurst
    }


    /* ----------------------------------------------
       PACKET IMPACT FLASH
    ---------------------------------------------- */

    impactFlash={
        impactFlash
    }


    /* ----------------------------------------------
       SYSTEM ACTIVITY
    ---------------------------------------------- */

    isSystemActive={
        isSystemActive
    }

/>


    </section>

);

}