import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Contact.css";

function Contact() {
  const baseURL = import.meta.env.VITE_API_BASE_URL;

  /* ---------------- FORM STATE ---------------- */
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });

  /* ---------------- CONTACT PAGE DATA STATE ---------------- */
  const [contactData, setContactData] = useState(null);
  
  useEffect(() => {
    const fetchContactPage = async () => {
      const res = await axios.get(`${baseURL}/contact-page`, {
        params: { domainName: "trimurthigroup.com" },
      });
      setContactData(res.data);
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
      await axios.post(`${baseURL}/contact/submit`, {
        ...formData,
        domain: "trimurthigroup.com",
      });

      alert("Message sent successfully ✅");
      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
        message: "",
      });
    } catch (error) {
      alert("Something went wrong ❌");
    }
  };

  return (
    <div className="contact-page">
      {/* HEADER */}
      <section className="contact-header">
        <h1>{contactData.pageTitle || "Contact Us"}</h1>
        <p>{contactData?.subtitle || "We’d love to hear from you"}</p>
      </section>
      
      {/* CONTACT CONTENT */}
      <section className="contact-wrapper">
        <div className="contact-container">
          
          {/* LEFT INFO */}
          <div className="contact-info">
            <h3>{contactData.pageTitle}</h3>
            
            <div className="info-block">
              <h6>Visit us</h6>
              <p>
                {contactData.description }
              </p>
            </div>

            <div className="info-block">
              <h6>Email</h6>
              <p>{contactData?.email || "trimurtigroupindia121@gmail.com"}</p>
            </div>

            <div className="info-block">
              <h6>Call</h6>
              <p>{contactData?.phone || "+91 95119 28410"}</p>
            </div>

            <div className="social-icons">
              {contactData?.facebook && (
                <a href={contactData.facebook} target="_blank">
                  <i className="bi bi-facebook"></i>
                </a>
              )}
              {contactData?.instagram && (
                <a href={contactData.instagram} target="_blank">
                  <i className="bi bi-instagram"></i>
                </a>
              )}
              {contactData?.linkedin && (
                <a href={contactData.linkedin} target="_blank">
                  <i className="bi bi-linkedin"></i>
                </a>
              )}
              {contactData?.twitter && (
                <a href={contactData.twitter} target="_blank">
                  <i className="bi bi-twitter"></i>
                </a>
              )}
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <label>City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />

              <label>Message</label>
              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />

              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="map-section">
        <div className="container">
          <h2 className="map-title">Our Location</h2>
          <p className="map-address">
           {contactData.description }
          </p>

          <div className="map-embed">
            <iframe
              title="Trimurti Group India Location"
              src={`https://www.google.com/maps?q=${
                contactData?.mapQuery ||
                "Gat No 74 Dhondiraj Colony Palus Karad Road Palus Sangli Maharashtra"
              }&output=embed`}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
