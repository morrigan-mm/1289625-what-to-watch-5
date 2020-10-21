import React from "react";
import PropTypes from "prop-types";

const HeaderPageTitle = ({children}) => {
  return <h1 className="page-title user-page__title">{children}</h1>;
};

HeaderPageTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeaderPageTitle;
