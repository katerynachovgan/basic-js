const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity ) {
  
  let result = 0;
  let finalActivity = parseFloat(sampleActivity);
  let k = (0.693 / HALF_LIFE_PERIOD).toFixed(6)
  let lgr = Math.log(MODERN_ACTIVITY / finalActivity);
  if ((sampleActivity) || ((sampleActivity !== String)) || (/^[:digit:]$/.test)) return false;

  result = Math.ceil( lgr / k);
  return result
};