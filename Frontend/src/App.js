import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ResultsPage from "./pages/ResultsPage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Login from "./components/loginSignin/Login"; // Corrected path
import Signup from "./components/loginSignin/Signup"; // Corrected path
import ForgetPassword from "./components/loginSignin/ForgetPassword"; // Corrected path

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forget-password" element={<ForgetPassword />} /> {/* Define the forget password route */}
            <Route path="/results" element={<ResultsPage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
