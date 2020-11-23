import classNames from "classnames";
import React from "react";
import PropTypes from "prop-types";

const FIELD_ERROR_CLASS = `sign-in__field--error`;

const renderErrorMessage = (text) => (
  <div className="sign-in__message">
    <p>{text}</p>
  </div>
);

const LoginForm = (props) => {
  const {
    onEmailChange,
    onPasswordChange,
    onToggleErrors,
    onSubmit,
    authorizationError,
    email,
    emailError,
    password,
    showErrors
  } = props;

  let errorMessage = null;

  if (authorizationError) {
    errorMessage = `We can’t recognize this email and password combination. Please try again.`;
  } else if (emailError && showErrors) {
    errorMessage = `Please enter a valid email address`;
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (emailError) {
      onToggleErrors(true);
    } else {
      onSubmit(email, password);
    }
  };

  return (
    <form action="#" className="sign-in__form" noValidate onSubmit={handleSubmit}>
      {errorMessage && renderErrorMessage(errorMessage)}
      <div className="sign-in__fields">
        <div className={classNames(`sign-in__field`, emailError && showErrors && FIELD_ERROR_CLASS)}>
          <input
            className="sign-in__input"
            type="email"
            placeholder="Email address"
            name="user-email"
            id="user-email"
            onChange={(evt) => onEmailChange(evt.target.value, evt.target.checkValidity())}
            value={email}
          />
          <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
        </div>
        <div className="sign-in__field">
          <input
            className="sign-in__input"
            type="password"
            placeholder="Password"
            name="user-password"
            id="user-password"
            onChange={(evt) => onPasswordChange(evt.target.value)}
            value={password}
          />
          <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
        </div>
      </div>
      <div className="sign-in__submit">
        <button className="sign-in__btn" type="submit">Sign in</button>
      </div>
    </form>
  );
};

LoginForm.propTypes = {
  authorizationError: PropTypes.number,
  email: PropTypes.string.isRequired,
  emailError: PropTypes.bool.isRequired,
  password: PropTypes.string.isRequired,
  showErrors: PropTypes.bool.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onToggleErrors: PropTypes.func.isRequired
};

export default LoginForm;
