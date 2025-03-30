import React from "react";
import "./WorkPermit.scss";

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

const WorkPermit = () => {
  return (
    <>
      <Header />
      <div className="top-work-permit">
        <div className="workPermit-container">
          <br />
          <h1 className="workPermit-title">Work Permits</h1>
          <br />
          <h2>
            1. &nbsp; We discuss options that will allow our clients to receive
            a work permit from the US Citizenship and Immigration Services.
          </h2>
          <br />
          <Divider />
          <br />
          <h2>
            2. &nbsp; Immigrants whose immigration status authorizes them to
            work in the United States without restrictions may receive a work
            permit, or receive working privileges or employment authorization
            document (EAD) through a green card.
          </h2>
          <br />
        </div>
      </div>
      <Button />
      <div className="work-permit-bottom">
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

export default WorkPermit;
