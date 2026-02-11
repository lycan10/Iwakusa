import React from "react"; 
import "./contact.css";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Mail01Icon,
  Call02Icon,
  Globe02Icon,
} from "@hugeicons/core-free-icons";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

const Contact = () => {
  return (
    <section className="contact-page">

      {/* HERO */}
      <div className="services-hero contact-hero">
        
   
        <div className="services-hero-overlay" />
      <div className="service-navbar">
      <Navbar />
      </div>
        
        {/* <img src={banner} alt="Global Metals Trade" /> */}

        <div className="services-hero-content">
     
          <h1>Start a Partnership<br/> Discussion</h1>
          <p>
Connect with our team to discuss your metal sourcing, trade, or partnership needs.  
We’re ready to support you with clarity, speed, and dependable execution.
</p>

        </div>
      </div>

      {/* CONTACT SECTION */}
      <div className="contact-main">
        <div className="contact-main-container">

          {/* LEFT — TEXT + INFO */}
          <div className="contact-left">

            <h2>Start the Conversation</h2>

            <p className="contact-intro">
              Reach out to start a conversation about your metals sourcing,
              trading, or partnership needs. Our team is ready to provide
              clear, secure, and efficient communication tailored to your
              business requirements.
            </p>

            <div className="contact-info-list">

              <div className="contact-info-item">
                <HugeiconsIcon icon={Mail01Icon} size={22} strokeWidth={1.5} />
                <div>
                  <h4>Email</h4>
                  <p>info@iwakusa.com</p>
                </div>
              </div>

              <div className="contact-info-item">
                <HugeiconsIcon icon={Call02Icon} size={22} strokeWidth={1.5} />
                <div>
                  <h4>Office</h4>
                  <p>+1 (734) 123-4567</p>
                </div>
              </div>

              <div className="contact-info-item">
                <HugeiconsIcon icon={Globe02Icon} size={22} strokeWidth={1.5} />
                <div>
                  <h4>Website</h4>
                  <p>www.iwakusa.com</p>
                </div>
              </div>

            </div>

            <div className="contact-company-note">
              <p>
                <strong>IWAKUSA ENTERPRISES LLC</strong> connects global markets
                to high-value metals with precision, security, and long-term
                value at the core of every transaction.
              </p>
            </div>

          </div>

          {/* RIGHT — FORM */}
          <div className="contact-right">

            <form className="contact-form">

              <div className="form-row">
                <input type="text" placeholder="Full Name" required />
              </div>

              <div className="form-row">
                <input type="email" placeholder="Email Address" required />
              </div>

              <div className="form-row">
                <input type="text" placeholder="Company (Optional)" />
              </div>

              <div className="form-row">
                <textarea
                  placeholder="Tell us about your inquiry"
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit">Send Message</button>

            </form>

          </div>

        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Contact;
