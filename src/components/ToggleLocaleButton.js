import React from "react";
import { useContext } from "react";
import { FiGlobe } from "react-icons/fi";
import LocaleContext from "../contexts/LocaleContext";

const ToggleLocaleButton = () => {
  const { locale, toggleLocale } = useContext(LocaleContext);

  if (locale === "id") {
    return (
      <div className="navbar-button" onClick={toggleLocale}>
        <FiGlobe size="24px" />
        <p className="navbar-button__text">En</p>
      </div>
    );
  }

  if (locale === "en") {
    return (
      <div className="navbar-button" onClick={toggleLocale}>
        <FiGlobe size="24px" />
        <p className="navbar-button__text">In</p>
      </div>
    );
  }
};

export default ToggleLocaleButton;
