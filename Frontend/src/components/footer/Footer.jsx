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
            <FaTwitter />
          </a>
          <a href="#facebook" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#telegram" aria-label="Telegram">
            <FaTelegramPlane />
          </a>
          <a href="#youtube" aria-label="YouTube">
            <FaYoutube />
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
        <h3>Contact Us</h3>
        <p>Email: contact@pcrecommendation.com</p>
        <p>Phone: +123 456 7890</p>
      </div>
    </footer>
  );
};

export default Footer;
