import React from "react";
import "./services.css";
import banner from "../../assets/iwakusa_banner.jpg";
import spotlight from "../../assets/iwakusa-services.jpg";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar"; 

const Services = () => {
  return (
    <section className="services-page">

      {/* HERO */}
      <div className="services-hero">
        
   
        <div className="services-hero-overlay" />
      <div className="service-navbar">
      <Navbar />
      </div>
        
        {/* <img src={banner} alt="Global Metals Trade" /> */}

        <div className="services-hero-content">
     
          <h1>Global Metals. Strategic Execution.</h1>
          <p>
            We don’t just move commodities. We architect supply, structure trades,
            and build long-term resource strategies for global partners.
          </p>
        </div>
      </div>

      {/* SERVICE FLOW TIMELINE */}
      <div className="services-flow">
        <h2>From Source to Strategy</h2>

        <div className="services-flow-line" />

        <div className="services-flow-grid">
          <div className="flow-step">
            <span>01</span>
            <h3>Global Sourcing</h3>
            <p>
              Direct relationships with vetted producers and global mining networks.
            </p>
          </div>

          <div className="flow-step">
            <span>02</span>
            <h3>Trade Structuring</h3>
            <p>
              Financial, regulatory, and logistics frameworks tailored to each deal.
            </p>
          </div>

          <div className="flow-step">
            <span>03</span>
            <h3>Secure Distribution</h3>
            <p>
              Controlled global movement with full compliance and documentation.
            </p>
          </div>

          <div className="flow-step">
            <span>04</span>
            <h3>Strategic Advisory</h3>
            <p>
              Long-term market positioning and resource acquisition strategy.
            </p>
          </div>
        </div>
      </div>

      {/* FEATURED SERVICE SPOTLIGHT */}
      <div className="services-spotlight">
        <div className="spotlight-image">
          <img src={spotlight} alt="Metals Trading" />
        </div>

        <div className="spotlight-content">
          <h2>Precision Metals Trading</h2>
          <p className="spotlight-lead">
            Market intelligence meets execution discipline.
          </p>

          <p>
            Iwakusa operates at the intersection of commodity markets, global
            logistics, and institutional trade execution. Our trading desk
            supports both physical and structured transactions across precious
            and strategic metals.
          </p>

          <ul>
            <li>✔ Institutional-grade trade execution</li>
            <li>✔ Risk-controlled transaction modeling</li>
            <li>✔ Global regulatory alignment</li>
            <li>✔ Multi-market price intelligence</li>
          </ul>
        </div>
      </div>

      {/* CAPABILITY MATRIX */}
      <div className="services-matrix">
        <h2>Operational Capabilities</h2>

        <div className="matrix-grid">
          <div className="matrix-card">
            <h4>Supply Chain Control</h4>
            <p>
              End-to-end oversight from extraction partners to final delivery.
            </p>
          </div>

          <div className="matrix-card">
            <h4>Compliance Architecture</h4>
            <p>
              Built-in international regulatory frameworks and documentation controls.
            </p>
          </div>

          <div className="matrix-card">
            <h4>Market Intelligence</h4>
            <p>
              Real-time global commodity insight and forward trend modeling.
            </p>
          </div>

          <div className="matrix-card">
            <h4>Partner Integration</h4>
            <p>
              Seamless coordination with refineries, buyers, and industrial clients.
            </p>
          </div>

          <div className="matrix-card">
            <h4>Transaction Security</h4>
            <p>
              Structured deal protection and financial risk controls.
            </p>
          </div>

          <div className="matrix-card">
            <h4>Global Logistics</h4>
            <p>
              Cross-border movement planning and secure documentation channels.
            </p>
          </div>
        </div>
      </div>

      {/* ================= PORTFOLIO ================= */}
<div className="services-portfolio">
  <div className="services-portfolio-container">

    <div className="portfolio-left">
      <h2>Our Metals Portfolio</h2>
      <h4>A balanced portfolio for a demanding world</h4>

      <p>
        Iwakusa’s approach spans the full value chain, from asset evaluation and
        physical trading to structured offtake arrangements. This helps reduce
        supply risk and improve transparency for our partners.
      </p>

      <p className="portfolio-sub">
        Our portfolio focuses on opportunities supported by:
      </p>

      <ul className="portfolio-checks">
        <li>Strong technical and market fundamentals</li>
        <li>Clear long-term demand drivers</li>
        <li>Stable operating environments</li>
        <li>Practical paths to market</li>
      </ul>
    </div>

    <div className="portfolio-right">
      <div className="portfolio-card">
        <h3>Precious Metals</h3>
        <p>
          Gold plays a critical role in global markets, valued for liquidity,
          stability, and wealth preservation. Iwakusa supports sourcing and
          physical trading in established markets.
        </p>
      </div>

      <div className="portfolio-card">
        <h3>Strategic & Battery Metals</h3>
        <p>
          Lithium and other strategic materials are essential to electrification,
          energy storage, and advanced manufacturing. We engage selectively
          through scalable opportunities and supply partnerships.
        </p>
      </div>

      <div className="portfolio-card">
        <h3>Other Strategic Metals</h3>
        <p>
          We evaluate additional critical materials used in infrastructure and
          industrial development, based on market demand and supply
          considerations.
        </p>
      </div>
    </div>

  </div>
</div>


{/* ================= WHO WE SERVE ================= */}
<div className="services-clients">
  <div className="services-clients-container">

    <div className="clients-header">
      <h2>Who We Serve</h2>
      <p>Supporting Diverse Clients Worldwide</p>
    </div>

    <div className="clients-grid">
      <div className="client-pill">Industrial Manufacturers</div>
      <div className="client-pill">Commodity Trading Firms</div>
      <div className="client-pill">Energy & Technology Companies</div>
      <div className="client-pill">Investors & Financial Institutions</div>
      <div className="client-pill">OEMs & Manufacturing Partners</div>
      <div className="client-pill">Mining & Refining Operations</div>
    </div>

    <div className="clients-footer">
      <p>
        Our clients value clarity, reliability, and a disciplined approach to
        complex markets.
      </p>
    </div>

  </div>
</div>


      {/* STRATEGIC CTA */}
      <div className="services-cta">
        <h2>Build Your Resource Strategy With Iwakusa</h2>
        <p>
          Partner with a team built for high-value metals markets, complex global
          logistics, and precision trade execution.
        </p>

        <button>Start a Conversation</button>
      </div>

      <Footer />
    </section>
  );
};

export default Services;
