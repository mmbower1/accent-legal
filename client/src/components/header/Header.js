import React, { useRef } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../language-selector/LanguageSelector";

// icons
import {
  FaBars,
  FaTimes,
  FaIdCard,
  FaHandshake,
  FaPhone,
} from "react-icons/fa";
import { SlGlobeAlt } from "react-icons/sl";
import { PiGavelFill } from "react-icons/pi";
import { ImFlag } from "react-icons/im";
import { BsFillSuitcaseLgFill } from "react-icons/bs";

const Header = () => {
  const navRef = useRef();
  const { t, i18n } = useTranslation();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <div className="left-nav">
        <Link to="/">
          <h3>
            <SlGlobeAlt />
            &nbsp; Accent Légal
          </h3>
        </Link>
        <LanguageSelector className="language-selector" />
      </div>
      <div className="right-nav">
        <nav ref={navRef}>
          <Link to="/green-cards" className="header-link">
            <FaIdCard />
            &nbsp;&nbsp;
            {t("navbar.navbar-greenCards")}
          </Link>
          <Link to="/citizenship" className="header-link">
            <ImFlag />
            &nbsp;&nbsp;
            {t("navbar.navbar-citizenship")}
          </Link>
          <Link to="/deportation" className="header-link">
            <PiGavelFill />
            &nbsp;&nbsp;
            {t("navbar.navbar-deportation")}
          </Link>
          <Link to="/work-permit" className="header-link">
            <BsFillSuitcaseLgFill />
            &nbsp;&nbsp;{t("navbar.navbar-workPermit")}
          </Link>
          {/* <a href="/">Consultation</a> */}
          <Link to="/about" className="header-link">
            <FaHandshake />
            &nbsp;&nbsp;{t("navbar.navbar-about")}
          </Link>
          <Link to="/contact" className="header-link">
            <FaPhone />
            &nbsp;&nbsp;{t("navbar.navbar-contact")}
          </Link>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
      </div>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
      {/* <Outlet /> */}
    </header>
  );
};

export default Header;
