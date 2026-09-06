import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";

/* ==========================================================
   LAZY-LOADED INTERNAL / HEAVY PAGES

   These pages are downloaded only when their route is opened.
   This keeps Proposal Generator, Admin Dashboard,
   Projects Dashboard and their heavy dependencies out of
   the initial homepage bundle.
========================================================== */

const ProposalGenerator = lazy(() =>
  import("./pages/ProposalGenerator")
);

const ProposalGeneratorV2 = lazy(() =>
  import("./pages/ProposalGeneratorV2")
);

const AdminDashboard = lazy(() =>
  import("./pages/AdminDashboard")
);

const ProjectsDashboard = lazy(() =>
  import("./pages/ProjectsDashboard")
);


/* ==========================================================
   PAGE LOADER
========================================================== */

function PageLoader() {
  return (
    <div
      className="admin-page-loading"
      role="status"
      aria-live="polite"
    >
      Loading...
    </div>
  );
}


/* ==========================================================
   APP
========================================================== */

export default function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>

        {/* ==================================================
           PUBLIC HOMEPAGE
        ================================================== */}

        <Route
          path="/"
          element={<HomePage />}
        />


        {/* ==================================================
           PROPOSAL GENERATOR
        ================================================== */}

        <Route
          path="/proposal"
          element={<ProposalGenerator />}
        />


        {/* ==================================================
           PROPOSAL GENERATOR V2
        ================================================== */}

        <Route
          path="/proposal-generator-v2"
          element={<ProposalGeneratorV2 />}
        />


        {/* ==================================================
           ADMIN DASHBOARD
        ================================================== */}

        <Route
          path="/admin"
          element={<AdminDashboard />}
        />


        {/* ==================================================
           PROJECTS DASHBOARD
        ================================================== */}

        <Route
          path="/projects"
          element={<ProjectsDashboard />}
        />

      </Routes>
    </Suspense>
  );
}