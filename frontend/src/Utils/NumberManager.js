export const getOrdinalSuffix = (n) => {
  const s = ["th", "st", "nd", "rd"],
    v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

export const getRandomNumber = (max, min = 1, exclude = null) => {
  let randomNum;

  // Keep generating a random number until it's not the excluded number
  do {
    randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (randomNum === exclude);

  return randomNum;
};

export const getRandomDecimal = (max = 3, min = 1) => {
  const randomDecimal = (Math.random() * (max - min) + min).toFixed(2);
  return parseFloat(randomDecimal);
};
