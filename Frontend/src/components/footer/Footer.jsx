import React from "react";
import "./Footer.css";
import { FaTwitter, FaFacebookF, FaTelegramPlane, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Left Section */}
      <div className="footer-section">
        <h2>PC Recommendation</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam.
        </p>
        <div className="social-icons">
          <a href="#twitter" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#facebook" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#telegram" aria-label="Telegram">
            <i className="fab fa-telegram-plane"></i>
          </a>
          <a href="#youtube" aria-label="YouTube">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>

      {/* Middle Section */}
      <div className="footer-section">
        <h3>Resource</h3>
        <ul>
          <li>
            <a href="#blogs">Blogs</a>
          </li>
          <li>
            <a href="#help-center">Help And Center</a>
          </li>
          <li>
            <a href="#faqs">FAQs</a>
          </li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="footer-section">
        <h3>Subscribe Us</h3>
        <p>Signup for our newsletter to get the latest news in your inbox.</p>
        <div className="subscribe-form">
          <input
            type="email"
            placeholder="Info@YourEmail.com"
            aria-label="Email address"
          />
          <button type="submit">→</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
