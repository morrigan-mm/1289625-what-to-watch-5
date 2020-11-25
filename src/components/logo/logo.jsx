import classNames from "classnames";
import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const Logo = ({isModified}) => {
  return (
    <div className="logo">
      <Link to="/" className={classNames(`logo__link`, {'logo__link--light': isModified})}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
};

Logo.propTypes = {
  isModified: PropTypes.bool
};

export default Logo;
