export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const commaFormatter = new Intl.NumberFormat(`ru`, {minimumFractionDigits: 1});

export const formatNumberWithComma = (number) => {
  return commaFormatter.format(number);
};

export const formatDateTime = (date, format) => {
  return new Date(date).toLocaleDateString(format);
};

export const formatFullDate = (date, format, options) => {
  return new Date(date).toLocaleString(format, options);
};

export const requestFullScreen = (element) => {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullScreen) {
    element.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
  }
};

export const allowFullScreen = () => {
  return Boolean(
      document.fullscreenEnabled ||
      document.mozFullScreenEnabled ||
      document.documentElement.webkitRequestFullScreen
  );
};

export const formatDuration = (seconds) => {
  const date = new Date(0);
  date.setSeconds(seconds);
  const timeLine = date.toISOString().substr(11, 8);

  return timeLine;
};

export const formatProgressBar = (currentTime, duration) => {
  return Math.round((currentTime / duration) * 100);
};
