import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
    // Add your login logic here
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  const handleForgetPassword = () => {
    navigate("/forget-password");
  };

  return (
    <div className="container">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div className="loginBox">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="userBox">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email</label>
          </div>
          <div className="userBox">
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
          <button type="button" className="submit-btn" onClick={handleSignUp}>
            Sign Up
          </button>
          <a href="#" className="forget-password" onClick={handleForgetPassword}>
            Forget password?
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
