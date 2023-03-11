import { getRandomInt } from "../utils/numbers";

function getRandomBoxMullerBasis() {
  const u = 0.975;
  const v = Math.random();
  return Math.sqrt( -2.0 * Math.log(u) ) * Math.cos(2.0 * Math.PI * v);
}

function getRandomBoxMuller(min, max) {
  return getRandomBoxMullerBasis() * getRandomInt(min, max);
}

const r = (a = 0, b = 0, c = 0) => {
  const k = Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2);
  return Math.sqrt(k);
}

export const generateRandomDensityPosition = ({ particleCenter, min, max }) => {
  return {
    x: getRandomBoxMuller(min, max) + particleCenter.position.x,
    y: 0,
    z: getRandomBoxMuller(min, max) + particleCenter.position.z
  }
};

export const generateRandomDensityNumber = ({ min, max }) => {
  return Math.abs(getRandomBoxMuller(min, max));
};