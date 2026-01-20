import React from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import "./About.css";

// Image imports
import bac from "../../assets/about/bac.jpeg";
import M1 from "../../assets/about/ma.jpeg";
// import p2 from "../../assets/images/About/representative.png";
import M2 from "../../assets/about/man.jpeg";
import M3 from "../../assets/about/manp.jpeg";

function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-show");
          }
        });
      },
      { threshold: 0.2 }
    );

    const animatedElements = document.querySelectorAll(
      ".fade-in, .fade-up, .slide-left, .slide-right, .zoom-in"
    );

    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-page">

      {/* ================= SEO HELMET ================= */}
      <Helmet>
        <title>About Us | Trimurti Group India</title>
        <meta
          name="description"
          content="Trimurti Group India is a trusted global exporter of agro products, textiles, and construction materials, delivering quality, consistency, and reliability worldwide."
        />
        <meta
          name="keywords"
          content="Trimurti Group India, About Trimurti Group, Indian Exporter, Agro Products Export, Textile Export, Construction Materials Export"
        />
        <meta name="author" content="Trimurti Group India" />
      </Helmet>

      {/* HERO (same as reference top section) */}
      <section className="about-hero zoom-in">
        <img src={bac} alt="About Us" />
        <div className="about-hero-overlay">
          <h1>About Us</h1>
          <p>Trusted • Global • Excellance.</p>
        </div>
      </section>

      {/* COMPANY OVERVIEW */}
      <section className="about-overview fade-up">
        <div className="overview-text slide-left">
          <h2>Prathap Desai</h2>
          <span className="text-muted fw-medium fw-bolder fs-5 ">
            CEO
          </span>
          <p>
            My journey in the import–export industry is driven by a strong commitment to quality, consistency, and trust across global markets. I specialize in exporting a diverse range of products, including jaggery, jaggery powder, tea powder, coconut, turmeric powder, and premium textile products such as Solapuri blankets and towels. In addition, I supply reliable construction materials including construction nails, roofing nails, and binding nails, ensuring durability and adherence to international specifications.
Every product is carefully sourced, processed, and packaged to meet global quality standards and customer expectations. My focus has always been on maintaining transparent trade practices, timely deliveries, and building long-term partnerships worldwide. Through consistent performance and strict compliance with international trade norms, I aim to deliver value-driven solutions and establish a reputation rooted in reliability and excellence.
          </p>
        </div>

        <div className="overview-image slide-right hover-zoom">
          <img src={M1} alt="founder" />
        </div>
      </section>

      {/* OUR STORY */}
      <section className="our-story-section fade-up">
        <h2 className="our-story-title">Our Story</h2>

        <p className="our-story-text">
          Our journey in the import–export industry is built on a strong commitment to delivering quality, consistency, and trust across global markets. With a diversified portfolio spanning agro-based products, textile goods, and construction materials, we connect India’s rich production strengths with international demand through transparent, reliable, and ethical trade practices.
        </p>

        <p className="our-story-text">
          Our agro-product range includes jaggery, jaggery powder, tea powder, coconut, and turmeric powder, carefully sourced from trusted producers to ensure natural quality, purity, and compliance with international food standards. In the textile segment, we specialize in Solapuri blankets and towels, reflecting India’s traditional craftsmanship combined with modern quality expectations. Additionally, our construction product line—construction nails, roofing nails, and binding nails—is supplied to meet the durability and performance requirements of global infrastructure projects.

          From sourcing to final shipment, every stage of our operations is guided by strict quality control measures and adherence to export regulations. We work closely with reliable suppliers, logistics partners, and international clients to ensure that each product meets precise specifications and industry standards. Our focus on long-term partnerships, transparency, and operational excellence continues to drive sustainable growth and reinforce our reputation as a dependable global trade partner.
        </p>
      </section>

      <section className="about-overview fade-up">
        <div className="overview-text slide-left">
          <h2>Pratibha Desai</h2>
          <span className="text-muted fw-medium fw-bolder fs-5 ">
            Founder
          </span>

          <p>
            Prithibha Desai is actively involved in supporting and expanding the company’s import–export operations, playing a key role in strengthening its global presence. Working closely with international partners and stakeholders, she ensures consistent quality standards, seamless coordination, and efficient execution across global markets. With a forward-looking and detail-oriented approach, Prithibha focuses on nurturing strong client relationships, adapting to evolving international trade requirements, and supporting sustainable business growth. Her leadership reflects the company’s commitment to continuity, innovation, and long-term reliability in global trade, while also highlighting the strength of women-led excellence in international business.
          </p>
        </div>
        <div className="overview-image slide-right hover-zoom">
          <img src={M2} alt="Siddhant Gosavi" />
        </div>
      </section>

      {/* what sets us apart */}
      <section className="towel-features-section fade-in">
        <h2 className="features-title">What Sets Us Apart</h2>
        <p className="features-subtitle">
          Delivering reliability, compliance, and long-term value across
          international markets.
        </p>

        <div className="features-grid">
          <div className="feature-card zoom-in">
            <div className="feature-icon">✔️</div>
            <h3>Trusted Quality</h3>
            <p>
              Consistently delivering internationally benchmarked standards
              through rigorous checks, reliability, and long-term trade
              excellence.
            </p>
          </div>

          <div className="feature-card zoom-in">
            <div className="feature-icon">🌍</div>
            <h3>Global Compliance</h3>
            <p>
              Ensuring full adherence to international trade regulations, export
              documentation, and globally accepted logistics practices.
            </p>
          </div>

          <div className="feature-card zoom-in">
            <div className="feature-icon">🔄</div>
            <h3>Versatile Solutions</h3>
            <p>
              Providing flexible sourcing, packaging, and delivery solutions
              tailored to diverse international business requirements.
            </p>
          </div>

          <div className="feature-card zoom-in">
            <div className="feature-icon">📦</div>
            <h3>Export Quality</h3>
            <p>
              Meeting global buyer expectations with export-grade handling,
              secure packaging, and premium shipment presentation.
            </p>
          </div>
        </div>
      </section>

      <section className="about-overview fade-up">
        <div className="overview-text slide-left">
          <h2>Prathmesh Desai </h2>
          <span className="text-muted fw-medium fw-bolder fs-5 ">
            Head of Department And
            Sales & Marketing
          </span>

          <p>
            As part of the next generation of leadership, Prathmesh Desai is
            actively involved in supporting and expanding the company’s
            import–export operations. Working closely with global partners, he
            contributes to maintaining quality standards, smooth coordination,
            and efficient execution across international markets. With a
            forward-looking approach,Prathmesh focuses on strengthening client
            relationships, adapting to evolving trade requirements, and
            supporting sustainable business growth. His involvement reflects the
            company’s commitment to continuity, innovation, and long-term
            reliability in global trade.
          </p>
        </div>
        <div className="overview-image slide-right hover-zoom">
          <img src={M3} alt="Siddhant Gosavi" />
        </div>
      </section>

      {/* VISION / MISSION / QUALITY */}
      <section className="about-pillars">
        <div className="pillar-card fade-up hover-card">
          <h3>Our Vision</h3>
          <p>
            To become a globally trusted trade partner, recognized for
            integrity, transparency, and long-term business value.
          </p>
        </div>

        <div className="pillar-card fade-up hover-card">
          <h3>Our Mission</h3>
          <p>
            To deliver reliable import–export solutions while maintaining
            ethical practices, efficiency, and customer satisfaction.
          </p>
        </div>

        <div className="pillar-card fade-up hover-card">
          <h3>Our Commitment to Quality</h3>
          <p>
            Ensuring every shipment meets international standards through strict
            quality control and compliance processes.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
