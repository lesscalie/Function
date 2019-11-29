'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  const callback = (acc, val) => (acc << 8) + parseInt(val, 10);
  return ip.split('.').reduce(callback);
};

module.exports = { ipToInt };


