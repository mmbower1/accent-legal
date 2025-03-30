import React from "react";
import "./GreenCards.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

//icons
import { PiArrowFatDownFill } from "react-icons/pi";
import { RxDividerHorizontal } from "react-icons/rx";

// components
import Divider from "../../components/divider/Divider";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Services from "../../components/services/Services";
import Button from "../../components/button/Button";
import FinalMessage from "../../components/finalMessage/FinalMessage";

const GreenCards = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      {/* <Link to="/">
        {" "}
        <BiSolidLeftArrowAlt />
        Back Home
      </Link> */}
      <div className="top-green-card">
        {/* <div className="dark-overlay-green-card"> */}
        <div className="greenCard-container">
          <br />
          <h1 className="greenCard-title">Green Cards</h1>
          <br />
          <h2>1. &nbsp; {t("green-cards.1")}</h2>
          <br />
          <Divider />
          <br />
          <h2>2. &nbsp; {t("green-cards.2")}</h2>
          <br />
          <Divider />
          <br />
          <h2>3. &nbsp; {t("green-cards.3")}</h2>
          <br />
          <Divider />
          <br />
          <h2>4. &nbsp; {t("green-cards.4")}</h2>
          <br />
          <li>{t("green-cards.5")}</li>
          <li>{t("green-cards.6")}</li>
          <li>{t("green-cards.7")}</li>
          <li>{t("green-cards.8")}</li>
          <br />
          <Divider />
          <br />
          <h2>
            5. &nbsp; {t("green-cards.9")}{" "}
            <a href="https://travel.state.gov/content/travel/en/legal/visa-law0/visa-bulletin.html">
              VISA BULLETIN
            </a>{" "}
            {t("green-cards.10")}
          </h2>
          <br />
        </div>
      </div>
      <Button />
      <div className="green-card-bottom">
        <br />
        <h2 className="all-services">
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

export default GreenCards;
