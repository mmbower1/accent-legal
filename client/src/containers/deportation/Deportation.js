import React from "react";
import "./Deportation.scss";
import { FaStar } from "react-icons/fa";
import { PiArrowFatDownFill } from "react-icons/pi";

// components
import Divider from "../../components/divider/Divider";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Services from "../../components/services/Services";
import Button from "../../components/button/Button";
import FinalMessage from "../../components/finalMessage/FinalMessage";

const Deportation = () => {
  return (
    <>
      <Header />
      <div className="top-deportation">
        <div className="deportation-container">
          <br />
          <h1 className="deportation-title">Deportation Defense</h1>
          <br />
          <h2>
            1. &nbsp; Immigration court appearance is mandatory and may be your
            way to get a green card. Filing for an asylum application in
            immigration court is a common way to present your case.
          </h2>
          <br />
          <Divider />
          <br />
          <h2>
            2. &nbsp; You may receive a Notice to Appear (NTA) based on
            overstaying a visa, entering the United States without a visa or
            applying for an immigration visa while in the United States and
            being denied that visa. When you receive a Notice to Appear this
            requires you to appear in immigration court.
          </h2>
          <br />
          <Divider />
          <br />
          <h2>
            3. &nbsp; It may be possible to receive a green card through
            immigration court if a judge agrees with your case. If you do not
            appear in the immigration court, you will receive an order of
            deportation without appearing in front of a judge. It is important
            to make all of your court appearances and keep your address current
            with the immigration court.
          </h2>
          <br />
        </div>
      </div>
      <Button />
      <div className="deportation-bottom">
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

export default Deportation;
