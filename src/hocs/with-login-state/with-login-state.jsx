import React, {PureComponent} from "react";

const withLoginState = (Component) => {
  class WithLoginState extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        email: ``,
        emailError: false,
        password: ``,
        showErrors: false
      };

      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.handleToggleErrors = this.handleToggleErrors.bind(this);
    }

    handleEmailChange(email, isValid) {
      this.setState({
        email,
        emailError: !isValid,
        showErrors: false
      });
    }

    handlePasswordChange(password) {
      this.setState({password});
    }

    handleToggleErrors(enable) {
      this.setState({showErrors: enable});
    }

    render() {
      return (
        <Component
          {...this.props}
          {...this.state}
          onEmailChange={this.handleEmailChange}
          onPasswordChange={this.handlePasswordChange}
          onToggleErrors={this.handleToggleErrors}
        />
      );
    }
  }

  return WithLoginState;
};

export default withLoginState;
