import React from "react";
import "./Citizenship.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// icons
import { FaStar } from "react-icons/fa";
import { PiArrowFatDownFill } from "react-icons/pi";

// components
import Divider from "../../components/divider/Divider";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Services from "../../components/services/Services";
import Button from "../../components/button/Button";
import FinalMessage from "../../components/finalMessage/FinalMessage";

const Citizenship = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <div className="top-citizenship">
        <div className="citizenship-container">
          <br />
          <h1 className="citizenship-title">Citizenship/ Naturalization</h1>
          <br />
          <h2>
            1. &nbsp; We provide assistance with the naturalization /
            citizenship application (n400) to help you apply for citizenship and
            become a naturalized citizen.
          </h2>
          <br />
          <Divider />
          <br />
          <h2>
            2. &nbsp; Naturalization is the process to receive United States
            citizenship. In order to apply for naturalization, you must have
            already received a green card.
          </h2>
          <br />
          <Divider />
          <br />
          <h2>
            3. &nbsp; If your biological or legal adoptive mother or father is a
            U.S. citizen by birth, or was naturalized before you reached your
            18th birthday, you may already be a U.S. citizen.
          </h2>
          <br />
        </div>
      </div>
      <Button />
      <div className="citizenship-bottom">
        <br />
        <h2 className="all-services">
          {" "}
          <PiArrowFatDownFill style={{ paddingTop: "5px" }} />
          &nbsp; All Services
        </h2>
        <br />
        <Services />
        <FinalMessage />
      </div>
      <Footer />
    </>
  );
};

export default Citizenship;
