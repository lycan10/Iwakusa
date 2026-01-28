import { useState } from "react";
import Header from "../../components/header/Header";
import Stats from "../../components/stats/Stats";
import { HugeiconsIcon } from "@hugeicons/react";
import {
    GlobalIcon,
    AnalyticsUpIcon,
    SecurityValidationIcon,
    Agreement02Icon
  } from "@hugeicons/core-free-icons";
import "./home.css";
import Footer from "../../components/footer/Footer";



const faqs = [
    {
      question: "What metals does Iwakusa specialize in?",
      answer:
        "Iwakusa specializes in gold, lithium, and other high-value precious and strategic metals traded across global markets."
    },
    {
      question: "Who do you work with?",
      answer:
        "We work with investors, industrial partners, and businesses seeking reliable access to critical metal resources."
    },
    {
      question: "How do you ensure secure transactions?",
      answer:
        "All transactions are handled with strict compliance, transparency, and risk management protocols at every stage."
    },
    {
      question: "Do you operate internationally?",
      answer:
        "Yes, Iwakusa supports global sourcing and distribution across multiple international markets."
    },
    {
      question: "What makes Iwakusa different?",
      answer:
        "Our combination of market expertise, trusted supply networks, and long-term partnership focus sets us apart."
    },
    {
      question: "How can I start working with Iwakusa?",
      answer:
        "You can contact us directly or request a quote to begin a conversation with our team."
    }
  ];

const Home = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  return (
    <div className="home">
      <div className="home-container">
        <Header />
        <Stats />
        <div className="about">
          <div className="about-container">
            <h1>
              ABOUT <br /> IWAKUSA
            </h1>
            <div className="about-content">
              <p>
                Iwakusa is a trusted partner in the global trade of gold,
                lithium, and other high-value metals. We provide reliable
                sourcing and secure distribution for investors, industrial
                partners, and businesses seeking stable access to critical
                resources. Our team leverages deep market expertise, strategic
                insight, and strong international networks to ensure every
                transaction is transparent, efficient, and compliant.
              </p>
              <p>
                From precious metals to strategic materials powering the energy
                transition, Iwakusa connects clients to the resources that drive
                global growth. Built on integrity, precision, and long-term
                partnerships, we help our clients achieve their investment and
                operational goals while delivering consistent, world-class
                value.
              </p>
            </div>
          </div>
        </div>
        <div className="partner">
            <div className="partner-container">
                <div className="partner-text">
                    <h1>WHY PARTNER <br /> WITH US </h1>
                    <p>
                        We combine trusted sourcing, global market expertise, and secure distribution to deliver reliable access to high-value metals. Our commitment to transparency, precision, and long-term partnerships ensures confidence at every stage of the trade.
                    </p>
                    <div className="partner-text-button">
                        <p>Download Brochure</p>
                    </div>

                </div>
                <div className="partner-info-container">
  <div className="partner-info-card">
    <div className="partner-info-card-icon">
    <HugeiconsIcon icon={GlobalIcon} size={35} color="white" strokeWidth={1.5} />
    </div>
    <h1>Trusted Global Sourcing</h1>
    <p>
      Access to gold, lithium, and strategic metals through reliable, vetted global supply networks.
    </p>
  </div>

  <div className="partner-info-card">
    <div className="partner-info-card-icon">
    <HugeiconsIcon icon={AnalyticsUpIcon} size={35} color="white"  strokeWidth={1.5} />
    </div>
    <h1>Market Expertise</h1>
    <p>
      Deep understanding of global metals markets to support informed, confident decision-making.
    </p>
  </div>

  <div className="partner-info-card">
    <div className="partner-info-card-icon">
    <HugeiconsIcon icon={SecurityValidationIcon} size={35} color="white"  strokeWidth={1.5} />
    </div>
    <h1>Secure & Transparent Trade</h1>
    <p>
      Every transaction is handled with precision, compliance, and complete operational transparency.
    </p>
  </div>

  <div className="partner-info-card">
    <div className="partner-info-card-icon">
    <HugeiconsIcon icon={Agreement02Icon} size={35} color="white"  strokeWidth={1.5} />
    </div>
    <h1>Long-Term Partnership Focus</h1>
    <p>
      We prioritize lasting relationships built on trust, consistency, and shared long-term value.
    </p>
  </div>

                </div>
            </div>
        </div>

        <div className="home-contact">
  <div className="home-contact-container">
    <div className="home-contact-text">
      <h1>Get in Touch</h1>
      <p>
        Whether you’re exploring a partnership, requesting a quote, or seeking more information,
        our team is ready to connect. Reach out to start a conversation about your metals needs.
      </p>
    </div>

    <form className="home-contact-form">
      <div className="home-form-group">
        <input type="text" placeholder="Full Name" required />
      </div>

      <div className="home-form-group">
        <input type="email" placeholder="Email Address" required />
      </div>

      <div className="home-form-group">
        <input type="text" placeholder="Company (Optional)" />
      </div>

      <div className="home-form-group">
        <textarea placeholder="Message" rows="5" required></textarea>
      </div>

      <button type="submit">Send Message</button>
    </form>
  </div>
</div>

        
        <div className="home-faq">
      <div className="home-faq-container">
        <h1>Frequently Asked Questions</h1>

        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-card ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <h2>{faq.question}</h2>
              {activeIndex === index && <p>{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer />
      </div>
    </div>
  );
};

export default Home;
