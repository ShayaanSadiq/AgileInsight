import React, { useState } from "react";
import "./AIHomePage.css";
import homepage from "./assets/homepage.png";
import logoImg from "./assets/AgileInsightLogo.jpeg";
import { useNavigate } from "react-router-dom";

const AgileInsightHomePage = () => {
  const [loginOption, setLoginOption] = useState("");
  const navigate = useNavigate();

  const onLoginBtnClicked = (value) => {
    if (value === "org") {
      navigate("/org/login");
    } else if (value === "manager") {
      navigate("/manager/login");
    } else {
      navigate("/user/login");
    }
  };

  const onSignupBtnClicked = () => {
    navigate("/org/signup");
  };
  return (
    <div className="home-body">
      <div className="home-container">
        <nav className="navbar">
          <div className="logo-section">
            <img src={logoImg} alt="AgileInsight Logo" className="logo-image" />
            <span className="logo-text">
              AgileInsight : A Sprint Stability Monitoring System
            </span>
          </div>

          <select
            className="login-select"
            value={loginOption}
            onChange={(e) => {
              const value = e.target.value;
              setLoginOption(value);
              onLoginBtnClicked(value);
            }}
          >
            <option value="">Select Login</option>
            <option value="org">Organisation Login</option>
            <option value="manager">Manager Login</option>
            <option value="user">Member Login</option>
          </select>
        </nav>

        <div className="hero">
          <div className="heading-description">
            <h2>Smarter sprints. Better insights. Consistent delivery.</h2>
            <p>
              AgileInsight is a modern project management platform built to help
              teams monitor, manage, and improve sprint stability. It provides
              clear visibility into project progress, task completion, and team
              performance, enabling you to identify risks early and keep your
              workflow smooth. With powerful analytics and an intuitive
              interface, AgileInsight empowers teams to make data-driven
              decisions, reduce delays, and maintain consistent delivery,
              ensuring every sprint stays on track and productive.
            </p>
            <button onClick={onSignupBtnClicked} className="start-btn">
              Get Started
            </button>
          </div>

          <img src={homepage} alt="jomepage-image" />
        </div>

        <div className="features">
          <div className="card">
            <h3> Analytics</h3>
            <p>Visualize project performance and track progress easily.</p>
          </div>

          <div className="card">
            <h3>Project Management</h3>
            <p>Create, manage and organize your projects efficiently.</p>
          </div>

          <div className="card">
            <h3> Task Tracking</h3>
            <p>Assign and monitor tasks with real-time updates.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgileInsightHomePage;
