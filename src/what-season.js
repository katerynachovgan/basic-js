const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  // remove line with error and write your code here
  if (!date) return 'Unable to determine the time of year!';

  if (isNaN(!date.getUTCHours())) throw new Error;

  let month = date.getMonth();
  if (month > 1 && month <= 4) {
    return 'spring';
  } else if (month > 4 && month <= 7) {
    return 'summer';
  } else if (month > 7 && month <= 10) {
    return 'autumn (fall)';
  } else return 'winter';
};