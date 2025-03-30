import React, { useState } from "react";
import "./Contact.scss";
import axios from "axios";
// import { Button } from "antd";

import { FaStar } from "react-icons/fa";
import { BiSolidRightArrow } from "react-icons/bi";
import { toast } from "react-toastify";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import FinalMessage from "../../components/finalMessage/FinalMessage";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.name === "") {
        toast.error("Please fill name.");
      } else if (formData.email === "") {
        toast.error("Please fill email.");
      } else if (formData.message === "") {
        toast.error("Please fill message.");
      }
      await axios.post("/contact", formData);
      toast.success("Contact submit successful");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
  };

  return (
    <>
      <Header />
      <div className="contact-container">
        {/* <Link to="/">
          {" "}
          <BiSolidLeftArrowAlt />
          Back Home
        </Link> */}
        <h1 className="contact-title">Contact Us</h1>
        <div className="contact-form-container">
          <div className="left">
            <span className="left-section">Office: Mark Kowalewski</span>
            <span className="left-section">
              Email: accentlaw@accentlegal.us
            </span>
            <span className="left-section">Phone: (916) 442-4243</span>
            <span className="left-section">
              Address: 2555 3rd St, Suite 215 Sacramento, CA 95818
            </span>
          </div>
          <div className="right">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  placeholder="Your name"
                  onChange={handleChange}
                />{" "}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  placeholder="Email"
                  onChange={handleChange}
                />{" "}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  placeholder="Phone #"
                  onChange={handleChange}
                />{" "}
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  placeholder="How can we help you?"
                  onChange={handleChange}
                />
              </div>
              <button className="btn btn-primary" type="submit">
                Submit
              </button>{" "}
              <br />
              <br />
            </form>
          </div>
        </div>
        <div className="map-container">
          <div className="map-card">
            <h3>2555 3rd Street, Suite 215, Sacramento, CA 95818</h3>
            <a
              href="https://maps.app.goo.gl/HqHpNjFnWpB881cU8"
              className="map-card-link"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
        <FinalMessage />
      </div>
      <Footer />
    </>
  );
};

export default Contact;
