import React, { useState } from "react";
import "./Consultation.scss";
import axios from "axios";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

// components
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import FinalMessage from "../../components/finalMessage/FinalMessage";

const Consultation = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    morning: false,
    afternoon: false,
    evening: false,
    uscis: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckbox = (e) => {
    if (!e.target.value) {
      setFormData({ ...formData, [e.target.name]: false });
    } else if (e.target.value) {
      setFormData({ ...formData, [e.target.name]: true });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.name === "") {
        toast.error("Please enter name.");
      } else if (formData.email === "") {
        toast.error("Please enter a valid email.");
      } else if (formData.phone === "") {
        toast.error("Please enter your phone #.");
      } else if (formData.message === "") {
        toast.error("Please enter a message.");
      }
      await axios.post("/consultation", formData);
      toast.success("Consultation submit successful.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        morning: false,
        afternoon: false,
        evening: false,
        uscis: false,
      });
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
  };

  return (
    <>
      <Header />
      <div className="consultation-container">
        {/* <Link to="/">
          <BiSolidLeftArrowAlt />
          Back Home
        </Link> */}
        <br />
        <h1 className="consultation-title">Schedule a Consultation</h1>
        <br />
        {/* <h2>
          <BiSolidRightArrow />
          &nbsp; lorem ipsum
        </h2> */}
        <div className="consultation-form-container">
          <div className="left">
            <form onSubmit={handleSubmit} className="consultation-form">
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
                <input
                  type="text"
                  name="message"
                  value={formData.message}
                  placeholder="Message"
                  onChange={handleChange}
                />{" "}
              </div>
            </form>
          </div>
          <br />
          <div className="right">
            <form onSubmit={handleSubmit} className="consultation-form">
              <h4>What day of the week are you available?</h4>
              <div className="checkboxes-weekday">
                <div className="checkbox">
                  <input
                    className="monday"
                    type="checkbox"
                    value={formData.monday === true}
                    name="monday"
                    onChange={handleCheckbox}
                  />
                  <label for="monday">Mon</label>
                </div>
                <div className="checkbox">
                  <input
                    className="tuesday"
                    type="checkbox"
                    value={formData.tuesday === true}
                    name="isActive"
                    onChange={handleCheckbox}
                  />
                  <label for="tuesday">Tues</label>
                </div>
                <div className="checkbox">
                  <input
                    className="wednesday"
                    type="checkbox"
                    value={formData.wednesday === true}
                    name="wednesday"
                    onChange={handleCheckbox}
                  />
                  <label for="wednesday">Wed</label>
                </div>
                <div className="checkbox">
                  <input
                    className="thursday"
                    type="checkbox"
                    value={formData.thursday === true}
                    name="thursday"
                    onChange={handleCheckbox}
                  />
                  <label for="thursday">Thur</label>
                </div>
                <div className="checkbox">
                  <input
                    className="friday"
                    type="checkbox"
                    value={formData.friday === true}
                    name="friday"
                    onChange={handleCheckbox}
                  />
                  <label for="friday">Fri</label>
                </div>
              </div>
              <br />
              <br />
              <br />
              <h4>What time of the day are you available?</h4>
              <div className="checkboxes-timeOfDay">
                <div className="checkbox">
                  <input
                    className="morning"
                    type="checkbox"
                    value={formData.morning === true}
                    name="morning"
                    onChange={handleCheckbox}
                  />
                  <label for="morning">Morning</label>
                </div>
                <div className="checkbox">
                  <input
                    className="afternoon"
                    type="checkbox"
                    value={formData.afternoon === true}
                    name="afternoon"
                    onChange={handleCheckbox}
                  />
                  <label for="afternoon">Afternoon</label>
                </div>
                <div className="checkbox">
                  <input
                    className="evening"
                    type="checkbox"
                    value={formData.evening === true}
                    name="evening"
                    onChange={handleCheckbox}
                  />
                  <label for="evening">Evening</label>
                </div>
              </div>
              <br />
              <br />
              <br />
              <div className="checkbox">
                <h4>
                  Is This Regarding A USCIS Reply, National Visa Center Reply Or
                  Court Date Due Within The Next Three Weeks?
                </h4>
                <input
                  className="uscis"
                  type="checkbox"
                  value={formData.uscis === true}
                  name="uscis"
                  onChange={handleCheckbox}
                />
              </div>
              <br />
              <button className="btn btn-primary" type="submit">
                Submit
              </button>{" "}
            </form>
          </div>
        </div>
        <br />
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
      </div>
      <FinalMessage />
      <Footer />
    </>
  );
};

export default Consultation;
