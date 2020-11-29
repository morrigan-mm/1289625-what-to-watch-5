import React from "react";
import usePlayingState from "../../hooks/use-playing-state";

const withPlayingState = (Component) => {
  const WithPlayingState = (props) => {
    const state = usePlayingState();

    return <Component {...props} {...state} />;
  };

  return WithPlayingState;
};

export default withPlayingState;
