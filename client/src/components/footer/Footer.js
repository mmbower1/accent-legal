import React from "react";
import "./Footer.scss";
import { SiFacebook } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socials">
        <SiFacebook style={{ marginRight: "20px", fontSize: "30px" }} />
        &nbsp;&nbsp;
        <br />
        &nbsp;
        <FaSquareXTwitter style={{ fontSize: "30px" }} />
        <br />
      </div>
      Copyright © 2024 Accent Légal
      <br />
      <br />
    </div>
  );
};

export default Footer;
