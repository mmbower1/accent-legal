import React from "react";
import "./Error.scss";
import { Link, useRouteError } from "react-router-dom";
import errorImage from "../../images/404.png";

const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
  }
  return (
    <>
      <Link to="/">Back Home</Link>

      <div className="error-container">
        <img src={errorImage} alt="404" />
      </div>
    </>
  );
};

export default Error;
