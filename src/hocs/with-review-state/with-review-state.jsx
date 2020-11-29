import React from "react";
import useReviewState from "../../hooks/use-review-state";

const withReviewState = (Component) => {
  const WithReviewState = (props) => {
    const state = useReviewState();

    return <Component {...props} {...state} />;
  };

  return WithReviewState;
};

export default withReviewState;
