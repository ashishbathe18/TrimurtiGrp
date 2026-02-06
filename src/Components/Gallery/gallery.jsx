import { useState } from "react";
import { Helmet } from "react-helmet-async";
import "bootstrap/dist/css/bootstrap.min.css";
import "./gallery.css";

import agro from "../../assets/agro/halkud.jpeg";
import coconat from "../../assets/agro/coconat.jpeg";
import jaggery from "../../assets/agro/jaggery.jpeg";
import teas from "../../assets/agro/Te.jpeg";
import powder from "../../assets/agro/powde.jpeg";
import halad from "../../assets/agro/hala.jpeg";
import blanket from "../../assets/agro/bla.jpeg";
import Towel from "../../assets/agro/towe.jpeg";
import small from "../../assets/agro/small.jpeg";
import nail from "../../assets/agro/nai.jpeg";
import roofing from "../../assets/agro/roofin.jpeg";
import binding from "../../assets/agro/bindin.jpeg";

import { Link } from "react-router-dom";

const images = [
  { id: 1, src: agro, category: "turmeric" },
  { id: 2, src: coconat, category: "coconut" },
  { id: 3, src: jaggery, category: "jaggery" },
  { id: 4, src: teas, category: "tea" },
  { id: 5, src: powder, category: "jaggery" },
  { id: 6, src: halad, category: "halad" },
  { id: 7, src: Towel, category: "big towel" },
  { id: 8, src: blanket, category: "solapuri blanket" },
  { id: 9, src: small, category: "small towel" },
  { id: 10, src: nail, category: "construction nail" },
  { id: 11, src: roofing, category: "roofing nail" },
  { id: 12, src: binding, category: "binding nail" },
];

export default function Portfolio() {
  const [filter, setFilter] = useState("all");

  const filteredImages =
    filter === "all"
      ? images
      : images.filter((img) => img.category === filter);

  return (
    <div>
      {/* ================= SEO ================= */}
      <Helmet>
        <title>Product Gallery | Trimurti Group India</title>
        <meta
          name="description"
          content="Explore the product gallery of Trimurti Group India featuring turmeric, jaggery, coconut, tea, textiles, Solapuri blankets, towels, and construction nails."
        />
      </Helmet>

      {/* ================= HERO GALLERY TITLE ================= */}
      <section className="gallery-hero"style={{color:"white"}}>
        <div className="gallery-hero-overlay"></div>
        <div className="gallery-hero-content">
          <h1 className="gallery-hero-title  fw-bold">Our Product Gallery</h1>
          <p className="gallery-hero-subtitle fw-bold">
              Premium Indian products exported worldwide
          </p>
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="gallery-section">
        <div className="container text-center">
          <h3 className="gallery-title fw-bold">Gallery of All Products</h3>
          <p className="gallery-subtitle fw-bold">
            A glimpse of our premium products
          </p>

          <div className="row g-4">
            {filteredImages.map((img) => (
              <div className="col-lg-4 col-md-6" key={img.id}>
                <div className="gallery-card">
                  <img src={img.src} alt="gallery" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="cta-wrapper">
        <div className="cta-box">
          <div className="cta-content">
            <h4 className="cta-subtitle">Let’s Build Global Partnerships</h4>
            <p className="cta-text">
              Exporting turmeric, jaggery, tea, coconut, solapuri blankets,
              towels and construction nails with global standards.
            </p>
          </div>

          <Link to="/contact">
            <button className="home-btn">Get In Touch</button>
          </Link>
        </div>
      </section>
    </div>
  );
}
