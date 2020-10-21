import classNames from "classnames";
import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const Header = ({children, pageType}) => {
  return (
    <header
      className={classNames(`page-header`, {
        'movie-card__head': pageType === `movie-card`,
        'user-page__head': pageType === `user-page`,
      })}
    >
      <div className="logo">
        <Link to="/" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>
      {children}
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.node,
  pageType: PropTypes.oneOf([`movie-card`, `user-page`])
};

export default Header;
