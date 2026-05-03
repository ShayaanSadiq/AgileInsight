import React from "react";
import { LoginForm } from "../components/LoginForm";
import { Text } from "../components/Text";
import "../css/LoginPage.css";

const LoginPage = () => {
  return (
    <div className="login-body">
      <div className="login-card">
        <LoginForm />
        <Text text={"Don't have an account"} link={"signup"} />
      </div>
    </div>
  );
};

export default LoginPage;
