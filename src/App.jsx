import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProposalGenerator from "./pages/ProposalGenerator";
import ProposalGeneratorV2 from "./pages/ProposalGeneratorV2";
import AdminDashboard from "./pages/AdminDashboard";
import ProjectsDashboard
from "./pages/ProjectsDashboard";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage />}
      />

      <Route
        path="/proposal-generator-v2"
        element={<ProposalGeneratorV2 />}
      />
 

      <Route
        path="/admin"
        element={<AdminDashboard />}
      />
      <Route
  path="/projects"
  element={<ProjectsDashboard />}
/>
    </Routes>
    
  );
}