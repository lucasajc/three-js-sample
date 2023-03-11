export const r = (a = 0, b = 0, c = 0) => {
  const k = Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2);
  return Math.sqrt(k);
}

export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}