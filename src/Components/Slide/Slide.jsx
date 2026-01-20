import React, { useState, useEffect, useRef } from "react";
import blanket from "../../assets/Slide/blanket.jpeg";
import coconat from "../../assets/Slide/cocona.jpeg";
import jaggery from "../../assets/Slide/jagger.jpeg";
import halkuda from "../../assets/Slide/halkud.jpeg";
import tea from "../../assets/Slide/Te.jpeg";
import jaggery7 from "../../assets/Slide/jaggery.jpeg";
import "./Slide.css";

export default function Slider() {
  const allProducts = [
    { img: blanket, title: "Solapuri  blanket", cat: "Fresh Fruits" },
    { img: coconat, title: "coconat", cat: "Poultry Products" },
    { img: jaggery, title: "jaggery", cat: "Organic Fertilizer" },
    { img: halkuda, title: "termaric", cat: "oranic termaric" },
    { img: tea, title: "tea powder", cat: "oraganic tea" },
    { img: jaggery7, title: "jaggery", cat: "Organic jaggery" },
  ];

  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % allProducts.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? allProducts.length - 1 : prev - 1));

  useEffect(() => {
    const interval = setInterval(nextSlide, 3500);
    return () => clearInterval(interval);
  }, []);

  const handleTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const handleTouchMove = (e) => (touchEndX.current = e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) nextSlide();
    if (touchEndX.current - touchStartX.current > 50) prevSlide();
  };

  const getPosition = (i) => {
    let pos = i - current;
    if (pos < -Math.floor(allProducts.length / 2)) pos += allProducts.length;
    if (pos > Math.floor(allProducts.length / 2)) pos -= allProducts.length;
    return pos;
  };

  return (
    <div className="slider-wrapper">
      <div
        className="slider-carousel"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {allProducts.map((product, i) => {
          const pos = getPosition(i);
          return (
            <div
              key={i}
              className={`carousel-card pos-${pos}`}
              style={{
                transform: `translateX(${pos * 200}px) scale(${
                  pos === 0 ? 1 : 0.7
                }) rotateY(${pos * 30}deg)`,
                zIndex: pos === 0 ? 10 : 5 - Math.abs(pos),
                opacity: Math.abs(pos) > 2 ? 0 : 1,
                background: pos === 0 ? "rgba(255,255,255,0.9)" : "#fff",
                boxShadow:
                  pos === 0
                    ? "0 20px 50px rgba(0,0,0,0.35)"
                    : "0 6px 18px rgba(0,0,0,0.15)",
              }}
            >
              <img src={product.img} alt={product.title} />
              <p>{product.title}</p>
            </div>
          );
        })}
      </div>

      <button className="arrow left-arrow" onClick={prevSlide}>
        ❮
      </button>
      <button className="arrow right-arrow" onClick={nextSlide}>
        ❯
      </button>
    </div>
  );
}