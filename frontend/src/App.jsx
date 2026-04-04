import { Routes, Route } from "react-router-dom";
import OrgLoginPage from "./organisation/pages/LoginPage.jsx";
import OrgHomePage from "./organisation/pages/HomePage.jsx";
import OrgSignupPage from "./organisation/pages/SignupPage.jsx";
import ManagerLoginPage from "./manager/pages/LoginPage.jsx";
import ManagerHomePage from "./manager/pages/HomePage.jsx";
import ManagerProjectPage from "./manager/pages/ProjectPage.jsx";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/org/login" element={<OrgLoginPage />} />
      <Route path="/org/home" element={<OrgHomePage />} />
      <Route path="/org/signup" element={<OrgSignupPage />} />
      <Route path="/manager/login" element={<ManagerLoginPage />} />
      <Route path="/manager/home" element={<ManagerHomePage />} />
      <Route path="/manager/project" element={<ManagerProjectPage />} />
    </Routes>
  );
}

export default App;
