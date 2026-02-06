import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Contact.css";

// ✅ LOCAL HERO IMAGE IMPORT (IMPORTANT)
import hand from "../../assets/agro/contact.png";

function Contact() {
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const domainName = import.meta.env.VITE_DOMAIN_NAME;

  /* ---------------- FORM STATE ---------------- */
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });

  /* ---------------- PAGE DATA ---------------- */
  const [contactData, setContactData] = useState(null);

  /* ---------------- FETCH CONTACT PAGE ---------------- */
  useEffect(() => {
    const fetchContactPage = async () => {
      try {
        const res = await axios.get(`${baseURL}/contact-page`, {
          params: { domainName },
        });
        setContactData(res.data.data || res.data);
      } catch (err) {
        console.error("Contact page error:", err);
      }
    };

    fetchContactPage();
  }, []);

  if (!contactData) return <div className="loading">Loading...</div>;

  /* ---------------- FORM HANDLERS ---------------- */
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${baseURL}/contact`, {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        domainName: domainName, // ✅ IMPORTANT
      });

      alert("Enquiry submitted successfully ✅");

      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
        message: "",
      });
    } catch (err) {
      console.error("Submit error:", err);
      alert("Something went wrong ❌");
    }
  };

  return (
    <div className="contact-page">
      {/* ================= HERO SECTION ================= */}
      <section
        className="contact-hero"
        style={{
          backgroundImage: `url(${contactData?.heroImage || hand})`,
        }}
      >
        <div className="hero-overlay">
          <h1>{contactData.pageTitle || "Contact Us"}</h1>
          <p>{contactData.subtitle || "We’d love to hear from you"}</p>
        </div>
      </section>

      {/* ================= CONTACT CONTENT ================= */}
      <section className="contact-wrapper">
        <div className="contact-container">
          {/* LEFT INFO */}
          <div className="contact-info ">
            <h3>{contactData.pageTitle}</h3>
            <p>Address: {contactData.description}</p>
            <p><strong>Email:</strong> {contactData.email}</p>
            <p><strong>Phone:</strong> {contactData.phone}</p>
          </div>

          {/* RIGHT FORM */}
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />

              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />

              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
              />

              <input
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
              />

              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* ================= MAP SECTION ================= */}
      <section className="map-section">
        <div className="container">
          <h2 className="map-title">Our Location</h2>
          <p className="map-address">{contactData.description}</p>

          <div className="map-embed">
            <iframe
              title="Location Map"
              src={`https://www.google.com/maps?q=${
                contactData.mapQuery ||
                "Gat No 74 Dhondiraj Colony Palus Karad Road Palus Sangli Maharashtra"
              }&output=embed`}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
