import React from "react";
import { useState } from "react";

import Logo from "../assets/logo.svg";
import { ReactComponent as HomeLogo } from "../assets/icon-nav-home.svg";
import { ReactComponent as MoviesLogo } from "../assets/icon-nav-movies.svg";

import { ReactComponent as TvSeriesLogo } from "../assets/icon-nav-tv-series.svg";
import { ReactComponent as BookmarkLogo } from "../assets/icon-nav-bookmark.svg";
import imageAvatar from "../assets/image-avatar.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [active, setActive] = useState({});

  const onActiveClass = (icon) => {
    setActive({ [icon]: "active-nav-icon" });
  };

  return (
    <header className="">
      <nav className="container p-bl-1 navigation bg-sd-blue">
        <div>
          <img src={Logo} />
        </div>
        <ul className="nav-list">
          <li>
            <Link onClick={() => onActiveClass("home")} to="/">
              <HomeLogo className={active.home} />
            </Link>
          </li>
          <li>
            <Link onClick={() => onActiveClass("movies")} to="movies">
              <MoviesLogo className={active.movies} />
            </Link>
          </li>
          <li>
            <Link onClick={() => onActiveClass("tvseries")} to="tvseries">
              <TvSeriesLogo className={active.tvseries} />
            </Link>
          </li>
          <li>
            <Link onClick={() => onActiveClass("bookmarked")} to="bookmarked">
              <BookmarkLogo className={active.bookmarked} />
            </Link>
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
