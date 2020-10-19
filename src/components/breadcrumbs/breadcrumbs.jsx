import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const Breadcrumbs = ({breadcrumbs}) => {

  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        {breadcrumbs
          .map((breadcrumb, i) => (
            <li key={i} className="breadcrumbs__item">
              {breadcrumb.link ? (
                <Link to={breadcrumb.link} className="breadcrumbs__link">{breadcrumb.text}</Link>
              ) : (
                <a className="breadcrumbs__link">{breadcrumb.text}</a>
              )}
            </li>
          ))
        }
      </ul>
    </nav>
  );
};

Breadcrumbs.propTypes = {
  breadcrumbs: PropTypes.array.isRequired
};

export default Breadcrumbs;
