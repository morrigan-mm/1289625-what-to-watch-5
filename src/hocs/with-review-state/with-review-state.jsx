import React, {PureComponent} from "react";

const DEFAULT_RATE_VALUE = `3`;

const withReviewState = (Component) => {
  class WithReviewState extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        text: ``,
        rate: DEFAULT_RATE_VALUE,
        isRated: false
      };

      this.handleRateChange = this.handleRateChange.bind(this);
      this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleRateChange(rate) {
      this.setState({rate, isRated: true});
    }

    handleTextChange(text) {
      this.setState({text});
    }

    render() {
      return (
        <Component
          {...this.props}
          {...this.state}
          onRateChange={this.handleRateChange}
          onTextChange={this.handleTextChange}
        />
      );
    }
  }

  return WithReviewState;
};

export default withReviewState;
