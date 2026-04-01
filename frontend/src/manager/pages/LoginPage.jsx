import React from "react";
import { LoginForm } from "../components/LoginForm";
import "../css/LoginPage.css";

const LoginPage = () => {
  return (
    <div className="login-body">
      <div className="login-card">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
