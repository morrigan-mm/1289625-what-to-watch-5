import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {breadcrumbShape} from "../../prop-types";

const Breadcrumbs = ({breadcrumbs}) => {
  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        {breadcrumbs
          .map((breadcrumb) => (
            <li key={breadcrumb.text} className="breadcrumbs__item">
              {breadcrumb.link ? (
                <Link to={breadcrumb.link} className="breadcrumbs__link">{breadcrumb.text}</Link>
              ) : (
                <span className="breadcrumbs__link">{breadcrumb.text}</span>
              )}
            </li>
          ))}
      </ul>
    </nav>
  );
};

Breadcrumbs.propTypes = {
  breadcrumbs: PropTypes.arrayOf(breadcrumbShape).isRequired
};

export default Breadcrumbs;
