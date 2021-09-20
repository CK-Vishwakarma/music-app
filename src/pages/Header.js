import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  if (isMenuOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }
  const toggleMenu = () => {
    setisMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setisMenuOpen(false);
  };
  return (
    <header className="container-fluid">
      <nav className="container">
        <span className="logo"> Music App</span>
        <div
          className={isMenuOpen ? "menu-icon open" : "menu-icon"}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={isMenuOpen ? "overlay open" : "overlay"}></div>
        <ul className={isMenuOpen ? "navbar open" : "navbar"}>
          <li className="navbar-item">
            <NavLink
              to="/lastfm"
              activeClassName="active-link"
              className="navbar-link"
              onClick={closeMenu}
            >
              Last.FM
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              to="/musicbrainz"
              activeClassName="active-link"
              className="navbar-link"
              onClick={closeMenu}
            >
              MusicBrainz
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              to="/favourites"
              activeClassName="active-link"
              className="navbar-link"
              onClick={closeMenu}
            >
              Favourites
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
