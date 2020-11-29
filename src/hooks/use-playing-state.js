import {useCallback, useState} from "react";

const usePlayingState = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleIsPlaying = useCallback(() => setIsPlaying((prevState) => !prevState), []);

  return {
    currentTime,
    duration,
    isPlaying,
    onButtonClick: toggleIsPlaying,
    onDurationChange: setDuration,
    onTimeUpdate: setCurrentTime
  };
};

export default usePlayingState;
