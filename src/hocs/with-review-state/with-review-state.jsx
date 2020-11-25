import React, {PureComponent} from "react";

const DEFAULT_RATE_VALUE = 0;

const withReviewState = (Component) => {
  class WithReviewState extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        text: ``,
        rate: DEFAULT_RATE_VALUE
      };

      this.handleRateChange = this.handleRateChange.bind(this);
      this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleRateChange(rate) {
      this.setState({rate});
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
