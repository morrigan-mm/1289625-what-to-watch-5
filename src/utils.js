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
