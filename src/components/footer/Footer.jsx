import React from "react";
import logo from "../../assets/Iwakusa_logo.png";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="navbar-logo footer-logo">
            <img src={logo} alt="Iwakusa Logo" />
          </div>
          <div className="footer-links">
            <p>ABOUT US</p>
            <p>PROJECT</p>
            <p>SERVICES</p>
            <p>CONTACT</p>
          </div>
        </div>
        <div className="footer-contact">
          <div className="footer-contact-left">
          <p>Connecting global markets to high-value metals. Focused on precision, security, and long-term value.</p>

          </div>
            <div className="footer-contact-socials-container">
              <div className="footer-contact-social">
                <FaFacebookF />
              </div>
              <div className="footer-contact-social">
                <RiTwitterXLine />
              </div>
              <div className="footer-contact-social">
                <FaLinkedinIn />
              </div>
            </div>
        </div>
        <div className="footer-copyright-container">
          <div className="copyright-info">
            <p>info@iwakusa.com</p>
            <p>Office: +1(734) 123-4567</p>
            <p>Fax: +1(734) 123-4567</p>
          </div>
          <div className="footer-copyright">
            <p>© {new Date().getFullYear()} Iwakusa. All rights reserved.</p>
          </div>
        </div>
        <div className="footer-name">
          <h1>IWAKUSA</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
