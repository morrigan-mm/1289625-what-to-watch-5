import React, {useEffect, useRef} from "react";
import PropTypes from "prop-types";

const PREVIEW_DELAY_IN_MS = 1000;

const MoviePreview = ({poster, video}) => {
  const videoRef = useRef();
  const timeoutId = useRef();

  useEffect(() => {
    return () => {
      clearTimeout(timeoutId.current);
    };
  }, []);

  const handleMouseEnter = () => {
    timeoutId.current = setTimeout(() => {
      videoRef.current.play();
    }, PREVIEW_DELAY_IN_MS);
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutId.current);
    videoRef.current.pause();
    videoRef.current.src = ``;
    videoRef.current.src = video;
  };

  return (
    <video
      ref={videoRef}
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
  video: PropTypes.string.isRequired
};

export default MoviePreview;
