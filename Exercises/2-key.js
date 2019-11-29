'use strict';
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const generateKey = (length, possible) => {
  let res = '';
  let randomChar = () => Math.floor(Math.random() * possible.length);
  for (let i = 0; i < length; i++) {
    res += possible[randomChar()];
  }
  return res;
};

module.exports = { generateKey };
