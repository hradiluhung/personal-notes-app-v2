import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <div className="back-button-wrapper">
      <Link to="/" className="back-button">
        <FiArrowLeft />
        <p>Back to Home</p>
      </Link>
    </div>
  );
};

export default BackButton;
