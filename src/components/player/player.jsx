import React, {useRef} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {filmShape} from "../../prop-types";
import {formatDuration, formatProgressBar, requestFullScreen, allowFullScreen} from "../../utils";

const renderPlayButton = () => {
  return (
    <>
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use href="#play-s"></use>
      </svg>
      <span>Play</span>
    </>
  );
};

const renderPauseButton = () => {
  return (
    <>
      <svg viewBox="0 0 14 21" width="14" height="21">
        <use href="#pause"></use>
      </svg>
      <span>Pause</span>
    </>
  );
};

const Player = (props) => {
  const {
    film,
    duration,
    currentTime,
    isPlaying,
    onExitButtonClick,
    onButtonClick,
    onDurationChange,
    onTimeUpdate
  } = props;

  const {title, cover, video} = film;

  const videoRef = useRef(null);

  const barProgress = formatProgressBar(currentTime, duration);

  const handlePlayButtonClick = () => {
    if (!isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
    onButtonClick();
  };

  return (
    <div className="player">
      <video
        ref={videoRef}
        src={video}
        className="player__video"
        poster={cover}
        onDurationChange={(evt) => onDurationChange(evt.target.duration)}
        onTimeUpdate={(evt) => onTimeUpdate(evt.target.currentTime)}
      />

      <button type="button" className="player__exit" onClick={() => onExitButtonClick(film.id)}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={`${barProgress}`} max="100"></progress>
            <div className="player__toggler" style={{left: `${barProgress}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{formatDuration(duration - currentTime)}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={handlePlayButtonClick}>
            {isPlaying ? renderPauseButton() : renderPlayButton()}
          </button>
          <div className="player__name">{title}</div>

          <button
            type="button"
            className="player__full-screen"
            onClick={() => (
              allowFullScreen() && requestFullScreen(videoRef.current)
            )}
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use href="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

Player.propTypes = {
  film: filmShape.isRequired,
  filmId: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  currentTime: PropTypes.number.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onExitButtonClick: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  onDurationChange: PropTypes.func.isRequired,
  onTimeUpdate: PropTypes.func.isRequired
};

const mapStateToProps = ({DATA}, ownProps) => ({
  film: DATA.films.find(({id}) => id === ownProps.filmId)
});

export default connect(mapStateToProps)(Player);
