const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth( arr) {
    if(arr.length === 0) {
      return 1;
    }
    if (arr.length === 1 && typeof(arr[0]) === 'number') return 1;
    
    for (let i = 0; i < arr.length; i++){
      if (Array.isArray(arr[i])){
        // console.log(arr[i]);
        // console.log(Array.isArray(arr[i]));
        return calculateDepth(arr[i]) + 1;
      }
    }
  }
};