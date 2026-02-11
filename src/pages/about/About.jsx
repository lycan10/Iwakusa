import React from "react";
import "./about.css";
import banner1 from "../../assets/iwakusa_banner.jpg";
import banner2 from "../../assets/Iwakusa_about_page.jpg";
import { HugeiconsIcon } from "@hugeicons/react";
import { EyeIcon, TargetIcon, Link02Icon } from "@hugeicons/core-free-icons";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

const About = () => {
  return (
    <section className="about-page">
      {/* HERO */}
      <div className="services-hero about-hero">
        
   
        <div className="services-hero-overlay" />
      <div className="service-navbar">
      <Navbar />
      </div>
        
        {/* <img src={banner} alt="Global Metals Trade" /> */}

        <div className="services-hero-content">
  <h1>Precision Sourcing. Proven Delivery</h1>
  <p>
We secure and deliver high-value metal resources through disciplined market strategy and trusted supply partnerships.  
Built on transparency, reliability, and long-term value.
</p>



</div>

      </div>
  

      {/* WHO WE ARE */}

      <div className="about-section">
        <div className="about-image">
          <img src={banner1} alt="Iwakusa About Page Logo" />
        </div>
        <div className="about-section-content-container">
          <div className="about-section-header">
            <h2>Who We Are</h2>
          </div>

          <div className="about-section-content">
            <p>
              Iwakusa is a trusted partner in the global trade of gold, lithium,
              and other high-value metals. We provide reliable sourcing and
              secure distribution for investors, industrial partners, and
              businesses seeking stable access to critical resources.
            </p>

            <p>
              Our team leverages deep market expertise, strategic insight, and
              strong international networks to ensure every transaction is
              transparent, efficient, and compliant.
            </p>
            <p>
              From precious metals to strategic materials powering the energy
              transition, Iwakusa connects clients to the resources that drive
              global growth. Built on integrity, precision, and long-term
              partnerships, we help our clients achieve their investment and
              operational goals while delivering consistent, world-class value.
            </p>
          </div>
        </div>
      </div>

      {/* PURPOSE / VISION / MISSION */}
      <div className="about-pillars">
        <div className="pillar-card">
          <div className="pillar-icon">
            <HugeiconsIcon
              icon={Link02Icon}
              size={26}
              color="white"
              strokeWidth={1.5}
            />
          </div>

          <h3>Our Purpose</h3>
          <p>
            To responsibly connect resources with the industries and systems
            shaping the future.
          </p>
        </div>

        <div className="pillar-card">
          <div className="pillar-icon">
            <HugeiconsIcon
              icon={EyeIcon}
              size={26}
              color="white"
              strokeWidth={1.5}
            />
          </div>
          <h3>Vision</h3>
          <p>
            To be a trusted global partner in precious and strategic metals.
          </p>
        </div>

        <div className="pillar-card">
          <div className="pillar-icon">
            <HugeiconsIcon
              icon={TargetIcon}
              size={26}
              color="white"
              strokeWidth={1.5}
            />
          </div>
          <h3>Mission</h3>
          <p>
            To source, trade, and deliver essential metals responsibly, creating
            long-term value for our partners.
          </p>
        </div>
      </div>

      {/* VALUES */}
      <div className="about-values">
  <div className="about-values-container">

    {/* LEFT CONTENT */}
    <div className="about-values-content-container">
      <h2>Our Principles</h2>

      <p className="about-values-intro">
        Our operations are guided by a disciplined framework of principles that
        ensure trust, accountability, and long-term value across every
        engagement. These standards shape how we source, trade, and deliver
        metals across global markets.
      </p>

      <div className="values-grid">
        <div className="value-item">Integrity in Every Transaction</div>
        <div className="value-item">Operational Transparency</div>
        <div className="value-item">Global Compliance & Governance</div>
        <div className="value-item">Precision & Risk Management</div>
        <div className="value-item">Long-Term Partnerships</div>
        <div className="value-item">Responsible Resource Trade</div>
      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="about-values-image">
      <img src={banner2} alt="" />
    </div>

  </div>
</div>


      {/* CLOSING */}
      {/* <div className="about-closing">
        <p>
          Built on trust, precision, and global expertise, Iwakusa partners with
          clients to navigate complex markets and unlock long-term opportunity
          in the global metals trade.
        </p>
      </div> */}

      <Footer />
    </section>
  );
};

export default About;
