export const initialCollection = [
  5,
  8,
  2,
  1,
  15,
  2,
  3,
  5,
  9,
  11,
  10,
  4,
  3,
  14,
  1,
  7,
  10,
  3,
  2,
  13,
];

// test cases
const inputLength = 100;
const inputRange = 100;

export const randomizedCollection = Array.from(new Array(inputLength), () =>
  Math.floor(Math.random() * inputRange)
);
