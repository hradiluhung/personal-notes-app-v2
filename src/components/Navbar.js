import React from "react";
import { Link } from "react-router-dom";
import ArchiveLinkButton from "./ArchiveLinkButton";
import LogoutButton from "./LogoutButton";
import ToggleLocaleButton from "./ToggleLocaleButton";
import ToggleThemeButton from "./ToggleThemeButton";

const Navbar = ({ authedUser, logout }) => {
  if (!authedUser) {
    return (
      <header className="navbar--not-authed">
        <div className="navbar-buttons">
          <ToggleLocaleButton />
          <ToggleThemeButton />
        </div>
      </header>
    );
  }

  return (
    <header className="navbar--authed">
      <Link className="navbar--authed__logo" to="/">
        Notes
      </Link>
      <div className="navbar-buttons">
        <ToggleLocaleButton />
        <ToggleThemeButton />
        <ArchiveLinkButton />
        <LogoutButton logout={logout} />
      </div>
    </header>
  );
};

export default Navbar;
