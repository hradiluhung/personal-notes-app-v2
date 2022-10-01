import React, { useContext } from "react";
import { MdOutlineArchive } from "react-icons/md";
import { Link } from "react-router-dom";
import LocaleContext from "../contexts/LocaleContext";
import { navbarStrings } from "../utils/strings";

const ArchiveLinkButton = () => {
  const { locale } = useContext(LocaleContext);

  return (
    <Link to="/archived-notes" className="navbar-button">
      <MdOutlineArchive size="26px" />
      <p className="navbar-button__text">{navbarStrings[locale].archive}</p>
    </Link>
  );
};

export default ArchiveLinkButton;
