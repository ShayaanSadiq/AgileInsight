import React from "react";
import { useNavigate } from "react-router-dom";
import "./404Error.css";
import errorImg from "./assets/astronaut.png";
import logoImg from "./assets/AgileInsightLogo.jpeg";  

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <div className="error-container">
      
      <div className="error-card">
        
        {/* Navbar */}
        <div className="error-navbar">
          <div className="logo-section">
            <img src={logoImg} alt="AgileInsight Logo" className="logo-image" />
            <h2 className="logo-text">AgileInsight</h2>
          </div>
        </div>

        {/* Image */}
        <img src={errorImg} alt="404" className="error-image" />

        {/* Text */}
        <h1 className="error-code">404</h1>
        <h2 className="error-title">Oops! Page not found</h2>
        <p className="error-desc">
          Sorry, we can’t find the page you’re looking for.
          It might have been moved or doesn’t exist.
        </p>

        {/* Button */}
        <button 
          className="back-btn"
          onClick={() => navigate("/")}
        >
          Go Back Home
        </button>

      </div>

    </div>
  );
};

export default Error404;