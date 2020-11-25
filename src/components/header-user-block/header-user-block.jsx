import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {AuthorizationStatus} from "../../constants";

const HeaderUserBlock = ({authorizationStatus, avatar}) => {
  return (
    <div className="user-block">
      {authorizationStatus === AuthorizationStatus.AUTH ?
        <Link to={`/myList`} className="user-block__avatar">
          <img src={avatar} alt="User avatar" width="63" height="63" />
        </Link> :
        <Link to={`/login`} className="user-block__link">Sign in</Link>
      }
    </div>
  );
};

HeaderUserBlock.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  avatar: PropTypes.string
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
  avatar: USER.info ? USER.info.avatar_url : null
});

export {HeaderUserBlock};
export default connect(mapStateToProps)(HeaderUserBlock);
