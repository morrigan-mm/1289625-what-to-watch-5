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

      this.handleRateClick = this.handleRateClick.bind(this);
      this.handleRateChange = this.handleRateChange.bind(this);
      this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleRateClick() {
      this.setState({isRated: true});
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
          onRateClick={this.handleRateClick}
          onRateChange={this.handleRateChange}
          onTextChange={this.handleTextChange}
        />
      );
    }
  }

  return WithReviewState;
};

export default withReviewState;
