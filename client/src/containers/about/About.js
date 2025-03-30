import React, { Fragment } from "react";
import "./About.scss";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

import marksPhoto from "../../images/mark.png";
// components
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import FinalMessage from "../../components/finalMessage/FinalMessage";

const About = () => {
  return (
    <>
      <Header />
      {/* <Link to="/">Back Home</Link> */}
      <div className="about-container">
        <h1 className="about-title">About Us</h1>
        <br />
        <div className="about-content-container">
          <div className="left">
            <p className="about-title">Attorney bio of Mark Kowalewski</p>
            <br />
            <img src={marksPhoto} alt="profile-photo" className="marksPhoto" />
            <br />
            <br />
            <br />
            <span>
              - Juris Doctorate, Lincoln Law School, Sacramento, CA 1999
            </span>
            <br />
            <br />
            <span>
              - Bachelor of Arts, Government and Communications Studies CSU,
              Sacramento 19166
            </span>
            <br />
            <br />
            <span>
              - Practicing as an immigration lawyer for the past 20+ years
            </span>
            <br />
            <br />
            <span>
              - Member of the American Immigration Lawyers Association
            </span>
            <br />
            <br />
            <span>
              - Admitted to the State Bar of California on December 6, 2000
            </span>
            <br />
            <br />
            <span>- Immigration law paralegal 1994-2000</span>
            <br />
            <br />
            <span>- Congressional Aide 1987-1994</span>
            <br />
          </div>
          <div className="right">
            <h4>
              Mark Kowalewski’s parents settled in the United States after
              having been displaced from Poland following World War II. As the
              son of refugees, Mark Kowalewski was the first United States
              citizen in his family by virtue of his birth in Southern
              California. <br />
              <br />
              As a youth, Mark was raised adjacent to the mushroom farm where
              his father worked as a senior grower. On occasion, his outdoor
              play would be interrupted by migrant farm workers running through
              his backyard in an effort to escape the border patrol. His father
              would then explain that he would be working overtime now that his
              work force was in hiding. <br />
              <br />
              Mark’s interest in law was triggered by a high school civics
              teacher who so inspired him that the very next year he moved to
              Sacramento to attend college and explore future opportunities to
              serve the public. After graduating from CSU, Sacramento, he was
              offered a position on the staff of the late Congressman Robert T.
              Matsui. His work there gave him the opportunity to serve the
              public and really opened his eyes to the power of law. <br />
              <br /> Since obtaining a law degree and passing the bar (2000),
              Mark has been applying his legal skills toward representing
              foreign nationals in administrative interviews and in hearings
              before immigration judges. He has successfully concluded over 800
              cases in his career.
            </h4>
          </div>
        </div>
        <br />
      </div>
      <div className="about-lower-content">
        <br />
        <p>
          <FaQuoteLeft size="2em" />
          &nbsp;&nbsp; There is a quote popular among immigration practitioners
          attributed to an INS spokeswoman that appeared in the Washington Post:
          “Immigration is a mystery and a mastery of obfuscation, and the
          lawyers who can figure it out are worth their weight in gold.” <br />
          <br />
          Mark Kowalewski takes pride in being worth his weight in gold.
          &nbsp;&nbsp;
          <FaQuoteRight size="2em" />
        </p>
        <br />
      </div>
      <div className="bottom">
        <FinalMessage />
      </div>
      <Footer />
    </>
  );
};

export default About;
