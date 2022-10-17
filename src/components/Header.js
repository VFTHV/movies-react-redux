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
    <header className="">
      <nav className="container p-bl-1 navigation bg-sd-blue">
        <div>
          <img src={Logo} />
        </div>
        <ul className="nav-list">
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/"
              end
            >
              <HomeLogo />
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/movies"
            >
              <MoviesLogo />
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/tvseries"
            >
              <TvSeriesLogo />
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/bookmarked"
            >
              <BookmarkLogo />
            </NavLink>
          </li>
        </ul>
        <div>
          <img className="avatar" src={imageAvatar} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
