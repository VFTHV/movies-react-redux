import React from "react";
import Logo from "../icons/logo.svg";

import { ReactComponent as HomeLogo } from "../icons/icon-nav-home.svg";
import { ReactComponent as MoviesLogo } from "../icons/icon-nav-movies.svg";
import { ReactComponent as TvSeriesLogo } from "../icons/icon-nav-tv-series.svg";
import { ReactComponent as BookmarkLogo } from "../icons/icon-nav-bookmark.svg";

import imageAvatar from "../icons/image-avatar.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="container p-bl-1 navigation bg-sd-blue">
        <div>
          <img src={Logo} alt="logo image" />
        </div>
        <ul className="nav-list" aria-label="navigation bar">
          <li>
            <NavLink
              aria-label="navigation link"
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/"
              end
            >
              <HomeLogo />
            </NavLink>
          </li>
          <li>
            <NavLink
              aria-label="navigation link"
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/movies"
            >
              <MoviesLogo />
            </NavLink>
          </li>
          <li>
            <NavLink
              aria-label="navigation link"
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/tvseries"
            >
              <TvSeriesLogo />
            </NavLink>
          </li>
          <li>
            <NavLink
              aria-label="navigation link"
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/bookmarked"
            >
              <BookmarkLogo />
            </NavLink>
          </li>
        </ul>
        <div>
          <img className="avatar" src={imageAvatar} alt="avatar image" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
