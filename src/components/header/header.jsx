import classNames from "classnames";
import React from "react";
import PropTypes from "prop-types";
import {PageType} from "../../constants";
import Logo from "../logo/logo";

const Header = ({children, pageType}) => {
  return (
    <header
      className={classNames(`page-header`, {
        'movie-card__head': pageType === PageType.MOVIE_CARD,
        'user-page__head': pageType === PageType.USER_PAGE,
      })}
    >
      <Logo />
      {children}
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.node,
  pageType: PropTypes.oneOf(Object.values(PageType))
};

export default Header;
