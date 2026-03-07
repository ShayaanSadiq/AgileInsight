import { Routes, Route } from "react-router-dom";
import "./App.css";
import OrgAuthPage from "./OrganizationCreatePage";
import AuthPage from "./UserAuthPage";
import OrgDashboard from "./OrganizationDashboard";
import UserDashboard from "./UserDashboard";
import ProjectTasks from "./ProjectTasks";

function App() {
  return (
    <Routes>
      {/* Organization */}
      <Route path="/org/auth" element={<OrgAuthPage />} />
      <Route path="/org/dashboard" element={<OrgDashboard />} />

      {/* User */}
      <Route path="/user/auth" element={<AuthPage />} />
      <Route path="/user/dashboard" element={<UserDashboard />} />

      {/* Project Page */}
      <Route path="/project/:id" element={<ProjectTasks />} />

      {/* Default */}
      <Route path="/" element={<OrgAuthPage />} />
    </Routes>
  );
}

export default App;
