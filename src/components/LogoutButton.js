import React, { useContext } from "react";
import PropTypes from "prop-types";
import { FiLogOut } from "react-icons/fi";
import LocaleContext from "../contexts/LocaleContext";
import { navbarStrings } from "../utils/strings";

const LogoutButton = ({ logout }) => {
  const { locale } = useContext(LocaleContext);

  return (
    <div className="navbar-button" onClick={logout}>
      <FiLogOut size="24px" />
      <p className="navbar-button__text">{navbarStrings[locale].logout}</p>
    </div>
  );
};

LogoutButton.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default LogoutButton;
