import { NavLink } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import {
  FaHome,
  FaInfoCircle,
  FaBoxOpen,
  FaImages,
  FaBlog,
  FaEnvelope,
} from "react-icons/fa";
import trimurathi from "../../assets/Logo/trimurathi.png";
import "./Navbar.css";
import LanguageSelector from "../LanguageSelector";

const Navbar = () => {
  const API_BASE = import.meta.env.VITE_API_BASE_URL;
  const domainName = import.meta.env.VITE_DOMAIN_NAME;

  const [categories, setCategories] = useState([]);
  const [showProducts, setShowProducts] = useState(false);

  const navbarTogglerRef = useRef(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await axios.get(`${API_BASE}/categories`, {
        params: { domainName },
      });
      setCategories(res.data?.data || []);
    } catch (error) {
      console.error("Navbar category fetch error:", error);
    }
  };

  // ✅ Mobile navbar close function
  const closeNavbar = () => {
    if (window.innerWidth < 992 && navbarTogglerRef.current) {
      navbarTogglerRef.current.click();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top custom-navbar pt-4">
      <div className="container">
        {/* BRAND */}
        <NavLink
          className="navbar-brand d-flex align-items-center"
          to="/"
          onClick={closeNavbar}
        >
          <img src={trimurathi} alt="Company Logo" className="navbar-logo" />
        </NavLink>

        {/* TOGGLER */}
        <button
          ref={navbarTogglerRef}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU */}
        <div
          className="collapse navbar-collapse navbar-collapse-fix"
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end onClick={closeNavbar}>
                <FaHome /> Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/about" onClick={closeNavbar}>
                <FaInfoCircle /> About
              </NavLink>
            </li>

            {/* PRODUCTS DROPDOWN */}
            <li className="nav-item product-nav">
              <span
                className="nav-link product-trigger"
                onClick={() => setShowProducts(!showProducts)}
              >
                <FaBoxOpen className="me-1" /> Products
                <span className={`nav-arrow ${showProducts ? "open" : ""}`}>
                  ▾
                </span>
              </span>

              {showProducts && (
                <div className="product-float-card">
                  {categories.map((cat) => (
                    <NavLink
                      key={cat._id}
                      to={`/product/${
                        cat.slug ||
                        cat.name.toLowerCase().replace(/\s+/g, "-")
                      }`}
                      className="product-float-item"
                      onClick={() => {
                        setShowProducts(false);
                        closeNavbar();
                      }}
                    >
                      {cat.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/gallery" onClick={closeNavbar}>
                <FaImages /> Gallery
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/blog" onClick={closeNavbar}>
                <FaBlog /> Blog
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" onClick={closeNavbar}>
                <FaEnvelope /> Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="nav-right px-5 ">
       <LanguageSelector/>
      </div>
      </div>

       
    </nav>
  );
};

export default Navbar;
