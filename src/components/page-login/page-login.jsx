import React from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import PropTypes from "prop-types";
import {login} from "../../store/api-actions";
import Footer from "../footer/footer";
import Header from "../header/header";
import HeaderPageTitle from "../header-page-title/header-page-title";
import {AppRoute, AuthorizationStatus, PageType} from "../../constants";
import {getUserErrorStatus, getUserStatus} from "../../store/selectors";
import LoginForm from "../login-form/login-form";

const PageLogin = ({authorizationError, authorizationStatus, onLoginSubmit}) => {
  if (authorizationStatus === AuthorizationStatus.AUTH) {
    return <Redirect to={AppRoute.ROOT.url()} />;
  }

  return (
    <div className="user-page">
      <Header pageType={PageType.USER_PAGE}>
        <HeaderPageTitle>Sign in</HeaderPageTitle>
      </Header>

      <div className="sign-in user-page__content">
        <LoginForm authorizationError={authorizationError} onSubmit={onLoginSubmit} />
      </div>

      <Footer />
    </div>
  );
};

PageLogin.propTypes = {
  authorizationError: PropTypes.number,
  authorizationStatus: PropTypes.string.isRequired,
  onLoginSubmit: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  authorizationError: getUserErrorStatus(state),
  authorizationStatus: getUserStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  onLoginSubmit: (email, password) => {
    dispatch(login({email, password}));
  }
});

export {PageLogin};
export default connect(mapStateToProps, mapDispatchToProps)(PageLogin);
