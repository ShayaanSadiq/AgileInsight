import React from "react";
import "../css/SignupPage.css";
import { SignupForm } from "../components/SignupForm.jsx";
import { Text } from "../components/Text.jsx";

const SignupPage = () => {
  return (
    <div className="signup-body">
      <div className="signup-card">
        <SignupForm />
        <Text text={"Don't have an account"} link={"Login"} />
      </div>
    </div>
  );
};

export default SignupPage;
