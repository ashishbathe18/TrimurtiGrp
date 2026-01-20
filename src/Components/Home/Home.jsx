import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./Home.css";

/* ===== HERO IMAGES ===== */
import home1img from "../../assets/Homes/home1im.jpeg";
import home2img from "../../assets/Homes/home2im.jpeg";
import home5img from "../../assets/Homes/home5im.jpeg";
import back from "../../assets/Homes/bac.jpeg";

/* ===== HOME ASSETS ===== */
import quality from "../../assets/Homes/qualit.jpeg";
import secure from "../../assets/Homes/secur.jpeg";
import shipping from "../../assets/Homes/shippin.jpeg";
import packgaing from "../../assets/Homes/packgain.jpeg";

import laptop from "../../assets/Homes/lapto.jpeg";
import mobile from "../../assets/Homes/mobil.jpeg";
import person from "../../assets/Homes/perso.jpeg";
import blankets from "../../assets/Homes/blanket.jpeg";
import hals from "../../assets/Homes/hal.jpeg";
import constru from "../../assets/Homes/constr.jpeg";
import khi from "../../assets/Homes/kh.jpeg";

import Slider from "../../Components/Slide/Slide.jsx";

const heroImages = [home1img, home2img, home5img, back];

function Home() {
useEffect(() => {
  document.title = "Trimurti Group India | Agro, Textile & Engineering Exporter";
}, []);

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
{/* 
 ================= SEO HELMET ================= */}
      <Helmet>
        <title>Trimurti Group India | Agro, Textile & Engineering Exporter</title>
        <meta
          name="description"
          content="Trimurti Group India is a trusted exporter of agro products, premium textiles, and construction materials delivering global quality standards."
        />
        <meta
          name="keywords"
          content="Agro Exporter India, Textile Exporter, Construction Material Export, Trimurti Group India"
        />
        <link rel="canonical" href="https://trimurtigroupindia.com/" />

        {/* ===== SCHEMA (JSON-LD) ===== */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Trimurti Group India",
            "url": "https://trimurtigroupindia.com",
            "logo": "https://trimurtigroupindia.com/logo.png",
            "description": "Exporter of agro products, textiles, and construction materials.",
            "sameAs": [],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer support",
              "availableLanguage": ["English"]
            }
          }
        `}
        </script>
      </Helmet>
 
      {/* ===== HERO SECTION ===== */}
      <header className="hero-section">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`hero-image ${index === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        <div className="hero-content">
          <h6>Trusted Export Partner</h6>

          <h1 className="title">
            Agro • Textile • Engineering
          </h1>

          <p>
            Delivering high-quality agricultural products, premium textiles,
            and reliable construction materials with trust, consistency,
            and global standards.
          </p>

        
           <Link to="/about">
            <button className="home-btn secondary">Read More </button>
          </Link>
        </div>
      </header>

      {/* ===== ABOUT COMPANY ===== */}
<section className="about-home">
  <div className="container text-center">
    <h2>About Trimurti Group India</h2>
    <p>
      Trimurti Group India is a trusted export company specializing in
      agricultural products, premium textiles, and construction materials.
      We focus on quality, global compliance, and long-term business
      partnerships worldwide.
    </p>
  </div>
  
</section>


      {/* ===== FEATURES ===== */}
      <section className="features-container">
        <div className="feature-box">
          <img src={quality} alt="Quality" />
          <h4>Certified Quality</h4>
          <p>Strict quality control standards</p>
        </div>

        <div className="divider"></div>

        <div className="feature-box">
          <img src={secure} alt="Secure Trade" />
          <h4>Secure Trade</h4>
          <p>Transparent & reliable processes</p>
        </div>

        <div className="divider"></div>

        <div className="feature-box">
          <img src={shipping} alt="Global Shipping" />
          <h4>Global Shipping</h4>
          <p>Worldwide export network</p>
        </div>

        <div className="divider"></div>

        <div className="feature-box">
          <img src={packgaing} alt="Packaging" />
          <h4>Custom Packaging</h4>
          <p>Export-ready solutions</p>
        </div>
      </section>

 {/* ================= INTERNAL LINK CTA ================= */}
     <section className="final-cta">
  <h2>Explore Our Premium Products</h2>
  <p>Discover high-quality products from Trimurti Group India.</p>

  <Link to="/product/agro">
    <button className="home-btn">View Products</button>
  </Link>
</section>

{/* why choose us */}
<section className="why-choose">
  <h2>Why Choose Us</h2>
  <div className="why-grid">
    <div className="why-box">
      <h3>Global Standards</h3>
      <p>Products compliant with international export norms.</p>
    </div>
    <div className="why-box">
      <h3>Timely Delivery</h3>
      <p>On-time shipments with reliable logistics partners.</p>
    </div>
    <div className="why-box">
      <h3>Trusted Network</h3>
      <p>Long-term relationships with global buyers.</p>
    </div>
  </div>
</section>


      {/* ===== TRUST STATS ===== */}
<section className="trust-stats">
  <div className="stat-box">
    <h3>10+</h3>
    <p>Countries Served</p>
  </div>

  <div className="stat-box">
    <h3>100+</h3>
    <p>Export Shipments</p>
  </div>

  <div className="stat-box">
    <h3>5+</h3>
    <p>Years of Experience</p>
  </div>

  <div className="stat-box">
    <h3>99%</h3>
    <p>Client Satisfaction</p>
  </div>
</section>


      {/* ===== PRODUCT SLIDER ===== */}
      <Slider />

      {/* ===== AGRO SHOWCASE ===== */}
      <section className="showcase-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7 position-relative text-center">
              <img src={laptop} alt="Agro Products" className="laptop-img" />
              <img src={mobile} alt="Agro" className="mobile-img" />
            </div>
            <div className="col-md-5">
              <div className="testimonial-box">
                <img src={person} alt="Founder" className="profile-img" />
                <h4>Agro Products</h4>
                <span>Natural & Sustainable</span>
                <p>
  ✔ Fresh & Natural Produce <br />
  ✔ Export-grade Quality Standards <br />
  ✔ Sustainable & Responsible Sourcing
</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TEXTILE SHOWCASE ===== */}
      <section className="showcase-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5 order-2 order-md-1">
              <div className="testimonial-box">
                <img src={person} alt="Textile" className="profile-img rounded-circle" />
                <h4>Textile Products</h4>
                <span> Strength & Comfort</span>
                <p>
                  ✔ High-quality textiles crafted with precision,
                    durability, and comfort for global markets.
                </p>
              </div>
            </div>
            <div className="col-md-7 order-1 order-md-2 position-relative text-center">
              <img src={blankets} alt="Textile" className="laptop-img" />
              <img src={hals} alt="Fabric" className="mobile-img" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONSTRUCTION SHOWCASE ===== */}
      <section className="showcase-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7 position-relative text-center">
              <img src={constru} alt="Construction" className="laptop-img" />
              <img src={khi} alt="Tools" className="mobile-img" />
            </div>
            <div className="col-md-5">
              <div className="testimonial-box">
                <img src={person} alt="Construction" className="profile-img" />
                <h4>Construction Materials</h4>
                <span>Built to Last</span>
                <p>
                  ✔ Reliable construction materials engineered
                    for strength, safety, and long-term performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="final-cta">
        <h2>Looking for a Reliable Export Partner?</h2>
        <p>
          Connect with us today to receive a customized export quotation
          tailored to your business needs.
        </p>
        <Link to="/contact">
          <button className="home-btn">Request Export Quotation</button>
        </Link>
      </section>
    </>
  );
}

export default Home;
