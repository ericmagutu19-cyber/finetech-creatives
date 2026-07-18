import {
  FaGlobeAmericas,
  FaChartLine,
  FaPalette,
  FaRobot,
} from "react-icons/fa";

import DashboardCore from "./DashboardCore";
import DashboardCard from "./DashboardCard";
import OrbitRing from "./OrbitRing";
import OrbitParticles from "./OrbitParticles";
import DashboardConnections from "./DashboardConnections";

import "./FloatingDashboard.css";

/* =====================================================
   DASHBOARD MODULES
===================================================== */

const modules = [
  {
    id: 1,
    icon: <FaGlobeAmericas />,
    title: "Web Platform",
    subtitle: "Modern Experiences",
    className: "module-top-left",
  },
  {
    id: 2,
    icon: <FaChartLine />,
    title: "Search Growth",
    subtitle: "SEO Optimized",
    className: "module-top-right",
  },
  {
    id: 3,
    icon: <FaPalette />,
    title: "Brand Identity",
    subtitle: "Visual Systems",
    className: "module-bottom-left",
  },
  {
    id: 4,
    icon: <FaRobot />,
    title: "AI Solutions",
    subtitle: "Business Automation",
    className: "module-bottom-right",
  },
];

export default function FloatingDashboard() {
  return (
    <section className="dashboard-stage">

      {/* ==========================================
          BACKGROUND
      =========================================== */}

      <div className="dashboard-background"></div>

      {/* ==========================================
          ORBIT SYSTEM
      =========================================== */}

      <div className="dashboard-orbit">

        <OrbitRing />

        <OrbitParticles />

      </div>

      {/* ==========================================
          MAIN LAYOUT
      =========================================== */}

      <div className="dashboard-layout">

        {/* ---------- TOP ROW ---------- */}

        

          <DashboardCard
            className={modules[0].className}
            icon={modules[0].icon}
            title={modules[0].title}
            subtitle={modules[0].subtitle}
          />

          <DashboardCard
            className={modules[1].className}
            icon={modules[1].icon}
            title={modules[1].title}
            subtitle={modules[1].subtitle}
          />

        

        {/* ---------- CORE ---------- */}

        <div className="dashboard-center">

          <DashboardCore />

        </div>

        {/* ---------- BOTTOM ROW ---------- */}

        

          <DashboardCard
            className={modules[2].className}
            icon={modules[2].icon}
            title={modules[2].title}
            subtitle={modules[2].subtitle}
          />

          <DashboardCard
            className={modules[3].className}
            icon={modules[3].icon}
            title={modules[3].title}
            subtitle={modules[3].subtitle}
          />

        

      </div>

      {/* ==========================================
          SVG CONNECTIONS
          (Next Phase)
      =========================================== */}

      <DashboardConnections />

    </section>
  );
}