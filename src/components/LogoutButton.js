import React, { useContext } from "react";
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

export default LogoutButton;
