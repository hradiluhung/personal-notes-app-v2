import React from "react";
import { useContext } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import LocaleContext from "../contexts/LocaleContext";
import ThemeContext from "../contexts/ThemeContext";
import { navbarStrings } from "../utils/strings";

const ToggleThemeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { locale } = useContext(LocaleContext);

  if (theme === "light") {
    return (
      <div className="navbar-button" onClick={toggleTheme}>
        <FiMoon size="24px" />
        <p className="navbar-button__text">{navbarStrings[locale].darkMode}</p>
      </div>
    );
  }

  if (theme === "dark") {
    return (
      <div className="navbar-button" onClick={toggleTheme}>
        <FiSun size="24px" />
        <p className="navbar-button__text">{navbarStrings[locale].lightMode}</p>
      </div>
    );
  }
};

export default ToggleThemeButton;
