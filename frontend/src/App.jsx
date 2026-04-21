import { Routes, Route } from "react-router-dom";
import AgileInsightHomePage from "./AgileInsightHomePage.jsx";
import OrgLoginPage from "./organisation/pages/LoginPage.jsx";
import OrgHomePage from "./organisation/pages/HomePage.jsx";
import OrgSignupPage from "./organisation/pages/SignupPage.jsx";
import OrgProjectPage from "./organisation/pages/ProjectPage.jsx";
import ManagerLoginPage from "./manager/pages/LoginPage.jsx";
import ManagerHomePage from "./manager/pages/HomePage.jsx";
import ManagerProjectPage from "./manager/pages/ProjectPage.jsx";
import UserLoginPage from "./users/pages/LoginPage.jsx";
import UserHomePage from "./users/pages/HomePage.jsx";
import UserProjectPage from "./users/pages/ProjectPage.jsx";
import ManagerEditPage from "./manager/pages/EditPage.jsx";
import PageNotFound from "./PageNotFound.jsx";
import { ProtectedRoute } from "./organisation/utils/ProtectedRoute.jsx";
import { ManagerProtectedRoute } from "./manager/utils/ManagerProtectdRoute.jsx";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AgileInsightHomePage />} />
      <Route path="/org/signup" element={<OrgSignupPage />} />
      <Route path="/org/login" element={<OrgLoginPage />} />
      <Route
        path="/org/home"
        element={
          <ProtectedRoute>
            <OrgHomePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/org/project/:projectId"
        element={
          <ProtectedRoute>
            <OrgProjectPage />
          </ProtectedRoute>
        }
      />
      <Route path="/manager/login" element={<ManagerLoginPage />} />
      <Route
        path="/manager/home"
        element={
          
            <ManagerHomePage />
          
        }
      />
      <Route
        path="/manager/project/:projectId"
        element={
          
            <ManagerProjectPage />
          
        }
      />
      <Route
        path="/manager/project/:projectId/edit"
        element={
          
            <ManagerEditPage />
          
        }
      />
      <Route path="/user/login" element={<UserLoginPage />} />
      <Route path="/user/home" element={<UserHomePage />} />
      <Route path="/user/project/:projectId" element={<UserProjectPage />} />

      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
