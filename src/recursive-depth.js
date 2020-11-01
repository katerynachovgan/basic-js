const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth( arr) {
    if(arr.length === 0) {
      return 1;
    }
    if (arr.length === 1 && typeof(arr[0]) === 'number') return 1;
    let cDepth = 1; 

    for (let i = 0; i < arr.length; i++){
      let count = 1;
      if (Array.isArray(arr[i])){
        count += this.calculateDepth(arr[i]);
        
        if (count > cDepth) cDepth = count;
      }
    }
    return cDepth;
  }
};