export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const formatNumberWithComma = (number) => {
  return number.toLocaleString(`ru`);
};
