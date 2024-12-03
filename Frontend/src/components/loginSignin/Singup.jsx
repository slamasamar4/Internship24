import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log("First Name:", firstName, "Last Name:", lastName, "Email:", email, "Password:", password, "Confirm Password:", confirmPassword);
    // Add your sign-up logic here
  };

  return (
    <div className='container'>
      <div className='signupBox'>
        <h2>Sign up</h2>
        <form onSubmit={handleSignUp}>
          <div className='userBox'>
            <input
              type='text'
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label>First name</label>
          </div>
          <div className='userBox'>
            <input
              type='text'
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label>Last name</label>
          </div>
          <div className='userBox'>
            <input
              type='email'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email</label>
          </div>
          <div className='userBox'>
            <input
              type='password'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>
          <div className='userBox'>
            <input
              type='password'
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <label>Confirm Password</label>
          </div>
          <button type='submit'>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
