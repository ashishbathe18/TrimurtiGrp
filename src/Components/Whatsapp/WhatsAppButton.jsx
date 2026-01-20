import React from "react";
import "./WhatsAppButton.css";
import whatsappIcon from "../../assets/WhatsappImage/whatsapp1.png";
// you can change image path if needed

const WhatsAppButton = () => {
  const whatsappNumber = "9511928410"; // your WhatsApp number
  const message = "Hello I am interested in your products";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
    >
      <img src={whatsappIcon} alt="WhatsApp" />
    </a>
  );
};

export default WhatsAppButton;