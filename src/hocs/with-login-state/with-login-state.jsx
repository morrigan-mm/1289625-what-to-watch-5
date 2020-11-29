import React from "react";
import useLoginState from "../../hooks/use-login-state";

const withLoginState = (Component) => {
  const WithLoginState = (props) => {
    const state = useLoginState();

    return <Component {...props} {...state} />;
  };

  return WithLoginState;
};

export default withLoginState;
