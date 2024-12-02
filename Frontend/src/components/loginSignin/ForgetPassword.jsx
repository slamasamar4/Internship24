import React, { useState } from "react";
import "./ForgetPassword.css";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    // Add your password reset logic here
  };

  return (
    <div className="container">
      <div className="forgetPasswordBox">
        <h2>Forget Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="userBox">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email</label>
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;