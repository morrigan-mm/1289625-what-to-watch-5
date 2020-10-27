import React, {createRef, Component} from "react";
import PropTypes from "prop-types";

const PREVIEW_DELAY_IN_MS = 1000;

class MoviePreview extends Component {
  constructor(props) {
    super(props);

    this.videoRef = createRef();

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutId);
  }

  handleMouseEnter() {
    this.timeoutId = setTimeout(() => {
      this.videoRef.current.play();
    }, PREVIEW_DELAY_IN_MS);
  }

  handleMouseLeave() {
    clearTimeout(this.timeoutId);
    this.videoRef.current.pause();
    this.videoRef.current.src = ``;
    this.videoRef.current.src = this.props.video;
  }

  render() {
    const {poster, video} = this.props;
    return (
      <video
        ref={this.videoRef}
        src={video}
        width="280"
        height="175"
        poster={poster}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        className="small-movie-card__image"
        preload="none"
        muted
      />
    );
  }
}

MoviePreview.propTypes = {
  video: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

export default MoviePreview;
