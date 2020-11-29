import React from "react";
import {Link} from "react-router-dom";
import {AppRoute, AuthorizationStatus} from "../../constants";
import {headerUserType} from "../../prop-types";

const HeaderUserBlock = ({headerUser}) => {
  const {authorizationStatus, avatar} = headerUser;

  return (
    <div className="user-block">
      {authorizationStatus === AuthorizationStatus.AUTH ?
        <Link to={AppRoute.MY_LIST.url()} className="user-block__avatar">
          <img src={avatar} alt="User avatar" width="63" height="63" />
        </Link> :
        <Link to={AppRoute.LOGIN.url()} className="user-block__link">Sign in</Link>
      }
    </div>
  );
};

HeaderUserBlock.propTypes = {
  headerUser: headerUserType.isRequired
};

export default HeaderUserBlock;
