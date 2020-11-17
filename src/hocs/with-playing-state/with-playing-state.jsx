import React, {PureComponent} from "react";

const withPlayingState = (Component) => {
  class WithPlayingState extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
        duration: 0,
        currentTime: 0,
        fullScreen: false
      };

      this.handleStateChange = this.handleStateChange.bind(this);
      this.handleDurationChange = this.handleDurationChange.bind(this);
      this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
    }

    handleStateChange() {
      this.setState({isPlaying: !this.state.isPlaying});
    }

    handleDurationChange(duration) {
      this.setState({duration});
    }

    handleTimeUpdate(currentTime) {
      this.setState({currentTime});
    }

    render() {
      return (
        <Component
          {...this.props}
          duration={this.state.duration}
          currentTime={this.state.currentTime}
          isPlaying={this.state.isPlaying}
          onButtonClick={this.handleStateChange}
          onDurationChange={this.handleDurationChange}
          onTimeUpdate={this.handleTimeUpdate}
        />
      );
    }
  }

  return WithPlayingState;
};

export default withPlayingState;
