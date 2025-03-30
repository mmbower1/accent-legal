import React from "react";
import "./Landing.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
// components
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Button from "../../components/button/Button";
// icons
import { ImPriceTags } from "react-icons/im";
import { BsBank2 } from "react-icons/bs";
import { FaHandsHelping } from "react-icons/fa";

const Landing = () => {
  const { t } = useTranslation();

  // useEffect(() => {
  //   i18n.changeLanguage(navigator.language);
  // }, []);

  return (
    <>
      <Header />
      <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1 className="x-large landing-title">Accent Légal</h1>
            <h2 id="landing-title2" className="x-large ">
              {t("landing.landing-greeting")}
            </h2>
            <br />
            <br />
            <div className="landing-description">
              <h2 className="lead">
                {t("landing.landing-description")}
                <br />
                <br />
                <h4>Working with you each step of the way:</h4>
                <br />
                <li>Advice</li>
                <li>Leadership</li>
                <li>Planning</li>
                <li>Communication</li>
              </h2>
              <br />
              <br />
              <h2 className="lead">
                Accént Legal the law office of Mark Kowalewski is an immigration
                law firm. We have experienced attorneys focused on family
                immigration, naturalization, green cards and deportation
                defense. We counsel those with TPS and DACA to determine their
                options. We strive to provide quality service at a flat rate. We
                offer payment plans and free consultations with attorneys, not
                staff.
              </h2>
            </div>
            <br />
            <br />
            <br />
            <Button />
            <br />
            <br />
            <br />
            <br />
            <div className="options-container">
              <div className="lead">
                <h5>
                  &nbsp;&nbsp;FLAT FEE PRICING &nbsp;&nbsp;
                  <ImPriceTags />
                </h5>
                <br />
                <span>
                  We offer flat rate pricing and low down payments. We do not
                  prioritize requests according to the amount you pay and we do
                  not bill by the hour as we fight for you. We want to celebrate
                  the wins with you.
                </span>
              </div>
              <div className="lead">
                <h5>
                  NO BANK ACCOUNT ?&nbsp;&nbsp;
                  <BsBank2 />
                </h5>
                <span className="payment">
                  We offer payments to suit your needs such as Venmo, cash, or
                  money orders as payments.
                  {/* <br />
                  <br /> */}
                  <br />
                  <br />
                  <button className="payment-button">
                    <a href="https://secure.lawpay.com/pages/kowalewski-law-corporation/trust">
                      Make Payment
                    </a>
                  </button>
                </span>
              </div>
              <div className="lead">
                <h5>
                  ASSISTANCE AS YOU NEED&nbsp;&nbsp;
                  <FaHandsHelping />
                </h5>
                <br />
                <span>
                  Based on your personal experiences and current status, we will
                  work with you to determine your options and aid you in your
                  decisions moving forward. We understand the difficult choices
                  you have had to make.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      {/* <Outlet /> */}
    </>
  );
};

export default Landing;
