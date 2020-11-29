import React, {useEffect, useRef} from "react";
import PropTypes from "prop-types";

const PREVIEW_DELAY_IN_MS = 1000;

const MoviePreview = ({poster, video, videoRef}) => {
  const videoR = useRef();
  const timeoutId = useRef();

  useEffect(() => {
    if (videoRef) {
      videoRef(videoR);
    }
    return () => {
      clearTimeout(timeoutId.current);
    };
  }, []);

  const handleMouseEnter = () => {
    timeoutId.current = setTimeout(() => {
      videoR.current.play();
    }, PREVIEW_DELAY_IN_MS);
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutId.current);
    videoR.current.pause();
    videoR.current.src = ``;
    videoR.current.src = video;
  };

  return (
    <video
      ref={videoR}
      src={video}
      width="280"
      height="175"
      poster={poster}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="small-movie-card__image"
      preload="none"
      muted
    />
  );
};

MoviePreview.propTypes = {
  poster: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
  videoRef: PropTypes.func
};

export default MoviePreview;
