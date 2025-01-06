import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} NST X RU. Website by the Dev Team</p>
        </div>
        <div className="footer-social">
          <ul className="social-icons">
            <li className="icon">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
            </li>
            <li className="icon">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </li>
            <li className="icon">
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <BsTwitterX />
              </a>
            </li>
            <li className="icon">
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
