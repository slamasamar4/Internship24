import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="header">
      {/* Left-aligned text */}
      <div className="header-title">
        <h3>PC Recommendations</h3>
      </div>

      {/* Right-aligned button */}
      <button className="btn_login" onClick={handleLoginClick}>
        Login
      </button>
    </div>
  );
};

export default Header;
