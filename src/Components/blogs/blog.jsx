import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./blog.css"

// 🔹 Import Images
import heroImg from "../../assets/blog1/heroIm.jpeg";
import Texttiles from "../../assets/blog1/Texttile.jpeg";
import jalis from "../../assets/blog1/jali.jpeg";
import coconat from "../../assets/blog1/cocona.jpeg";
import Tea from "../../assets/blog1/Te.jpeg";
import herbal from "../../assets/blog1/herba.jpeg";
import jaggerys from "../../assets/blog1/jaggery.jpeg";
import Towel from "../../assets/blog1/Towe.jpeg";
import Nails from "../../assets/blog1/Nail.jpeg";
import Binding from "../../assets/blog1/Bindin.jpeg";
import root from "../../assets/blog1/roo.jpeg";
// import locationImg from "../assets/about/location.jpg";

// 🔹 Section Data (map वापरण्यासाठी)
const sections = [
  {
    title: "Jaggery Powder",
    text:
      "Jaggery powder is finely ground jaggery that is easy to use and dissolves quickly. It has the same nutritional benefits as jaggery, is convenient for daily cooking, tea, sweets, and baking, and is considered a healthier alternative to refined sugar.",
    img: heroImg,
    reverse: false,
  },
  {
    title: " organic jaggery ",
    text:
      "Turmeric, derived from the Curcuma longa plant, is a vibrant yellow-orange spice widely used in cooking and traditional medicine. Its main active compound, curcumin, possesses anti-inflammatory and antioxidant properties, supporting joint health, digestion, and potentially reducing the risk of chronic diseases like heart disease and arthritis",
    img:jaggerys,
    reverse: true,
  },
  {
    title: "Natural tea powder ",
    text:
      "Natural tea powder offers concentrated antioxidants, especially catechins like EGCG, which support heart health and reduce inflammation. It boosts metabolism, aids detoxification, and enhances focus due to L-theanine and caffeine synergy.",
    img: Tea,
    reverse: false,
  },
  {
    title: "Coconat Water",
    text:
      "Coconut water is rich in potassium and electrolytes, making it excellent for hydration and supporting heart health by helping regulate blood pressure. It may also aid in kidney stone prevention and blood sugar control, while being low in calories and fat-free",
    img: coconat,
    reverse: true,
  },
  {
    title: "Turmeric ",
    text:
      "Turmeric, derived from the Curcuma longa plant, is a vibrant yellow-orange spice widely used in cooking and traditional medicine. Its main active compound, curcumin, possesses anti-inflammatory and antioxidant properties, supporting joint health, digestion, and potentially reducing the risk of chronic diseases like heart disease and arthritis",
    img: herbal,
    reverse: false,
  },
   {
    title: "Turmeric root ",
    text:
      "Turmeric Root is a natural agricultural product widely used for its medicinal, culinary, and industrial benefits. Rich in curcumin, turmeric root is known for its strong aroma, vibrant color, and powerful anti-inflammatory and antioxidant properties.",
    img: root,
    reverse: true,
  },
  
  {
    title: "Solapuri blanket",
    text:
      "The Solapuri blanket, or Solapuri chaddar, is a traditional cotton textile from Solapur, Maharashtra, known for its intricate Jacquard designs, vibrant colors, and long-lasting durability. Originally handwoven, it is now made using Jacquard machines, maintaining its reputation for quality.",
    img: Texttiles,
    reverse: false,
  },
  {
    title: " Towel ",
    text:
      "A towel is a soft, absorbent fabric used for drying or wiping. Common types include bath, hand, and kitchen towels, often made from cotton or microfiber.",
    img:Towel,
    reverse: true,
  },
  {
    title: "Roofing Nail",
    text:
      "Roofing Nail: Short nail with a wide head and corrosion-resistant coating, designed to secure shingles and withstand weather exposure.",
    img: jalis,
    reverse: false,
  },
  {
    title: " construction Nail ",
    text:
      "For as long as humans have been constructing anything, we've been using nails. From the handmade nails found in the Roman Empire, to the invention of the slitting mill, to cut nails in the 16th century, nails have stood the test of time.",
    img:Nails,
    reverse: true,
  },
   {
    title: " binding wire ",
    text:
      "For as long as humans have been constructing anything, we've been using nails. From the handmade nails found in the Roman Empire, to the invention of the slitting mill, to cut nails in the 16th century, nails have stood the test of time.",
    img:Binding,
    reverse: false,
  },
];

const resources = ["Company News", "Investor Relations", "What’s New"];

const blog = () => {
  return (
    <>
      {/* 🔹 ABOUT / MISSION / STORY (MAP) */}
      {sections.map((item, index) => (
        <section className="about-section gap-2 mt-5" key={index}>
          <Container>
            <Row className="align-items-center">
              <Col md={6} className={item.reverse ? "order-md-2" : ""}>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </Col>
              <Col md={6}>
                <img
                  src={item.img}
                  alt={item.title}
                  className="img-fluid rounded-img "
                />
              </Col>
            </Row>
          </Container>
        </section>
      ))}
    </>
  );
};

export default blog;
