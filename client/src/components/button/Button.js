import React from "react";
import "./Button.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ImArrowRight } from "react-icons/im";

const Button = () => {
  const { t } = useTranslation();

  return (
    <div className="button-container">
      <ImArrowRight />
      &nbsp;&nbsp;Have problems but can’t consult anyone? &nbsp;&nbsp;
      <div className="buttons">
        <Link to="/consultation" className="btn btn-primary">
          {t("landing.free-consultation")}
        </Link>
      </div>
    </div>
  );
};

export default Button;
