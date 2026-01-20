import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="custom-footer mt-4">
      <div className="container">
        <div className="row">

          {/* ABOUT */}
          <div className="col-md-3 footer-col">
            <h5 className="footer-title">
              <span className="icon-circle">◎</span> Address
            </h5>
            <p>
              Trimurti Group India 
Mrs.Pratibha Pratap Desai
Gat.No.74, Dhondiraj colony,Palus-Karad Road
At Post - Palus,Tal-Palus Dist-Sangli (Maharashtra/India)-416310
              {/* 203 Fake St. Mountain View,<br />
              San Francisco, California,<br />
              USA */}
            </p>
            <p>📞 +9195119 28410</p>
            <p className="email">✉ trimurtigroupindia121@gmail.com </p>

            
          </div>

          {/* LATEST NEWS */}
          <div className="col-md-3 footer-col">
            <h5 className="footer-title">
              <span className="icon-circle">📰</span> Latest Updates
            </h5>

            <div className="news-item">
              <img src="https://picsum.photos/60/60?1" alt="" />
              <div>
                <p>Delivering agro, textile, and engineering products to international markets with trusted quality.</p>
                <small>jan 19,2025</small>
              </div>
            </div>

            <div className="news-item">
              <img src="https://picsum.photos/60/60?2" alt="" />
              <div>
                <p>Ensuring export-grade standards, secure packaging, and on-time shipments worldwide.</p>
                <small>jan 19,2025</small>
              </div>
            </div>
          </div>

          {/* INFORMATION */}
          <div className="col-md-3 footer-col">
            <h5 className="footer-title">
              <span className="icon-circle">📄</span> Quick Links
            </h5>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">about</Link></li>
              <li ><Link to="/Products">Products</Link></li>
              <li><Link to='/gallery'>gallery</Link></li>
              <li><Link to="/Blog">Blog</Link></li>
              <li><Link to="/Contact">Contact</Link></li>
            </ul>
          </div>

          {/* INSTAGRAM */}
          <div className="col-md-3 footer-col">
            <h5 className="footer-title">
              <span className="icon-circle">📸</span> Instagram
            </h5>
            <div className="insta-grid">
              {[1,2,3,4,5,6].map(i => (
                <img
                  key={i}
                  src={`https://picsum.photos/100/100?${i}`}
                  alt=""
                />
              ))}
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
        </div>
      </div>
    </footer>
  );
};

export default Footer;
