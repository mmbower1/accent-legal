import React from "react";
import "./FinalMessage.scss";
import { FaStar } from "react-icons/fa";

const FinalMessage = () => {
  return (
    <div className="final-message">
      <span className="stars">
        <FaStar style={{ color: "#FFD700" }} />
        &nbsp; Reaching the stars for our clients. All immigration applications
        are discretionary, have professionals on your side.
      </span>
      <button className="payment-button">
        <a href="https://secure.lawpay.com/pages/kowalewski-law-corporation/trust">
          Make Payment
        </a>
      </button>
    </div>
  );
};

export default FinalMessage;
