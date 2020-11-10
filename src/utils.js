export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const formatNumberWithComma = (number) => {
  return number.toLocaleString(`ru`);
};

export const formatDateTime = (date, format) => {
  return new Date(date).toLocaleDateString(format);
};

export const formatFullDate = (date, format, options) => {
  return new Date(date).toLocaleString(format, options);
};
