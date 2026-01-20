import React from "react";
import "./CallButton.css";
import callIcon from "../../assets/CallImage/call.png";// phone icon

const CallButton = () => {
  const phoneNumber = "9511928410"; // your number

  return (
    <a
      href={`tel:${phoneNumber}`}
      className="call-float"
      aria-label="Call us"
    >
      <img src={callIcon} alt="Call" />
    </a>
  );
};

export default CallButton;
