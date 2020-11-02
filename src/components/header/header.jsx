import classNames from "classnames";
import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {PageType} from "../../constants";

const Header = ({children, pageType}) => {
  return (
    <header
      className={classNames(`page-header`, {
        'movie-card__head': pageType === PageType.MOVIE_CARD,
        'user-page__head': pageType === PageType.USER_PAGE,
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
  pageType: PropTypes.oneOf(Object.values(PageType))
};

export default Header;
