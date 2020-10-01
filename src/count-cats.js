const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let number = 0;
  let ar = backyard;
  for (let i = 0; i < ar.length; i++){
    for (let j = 0; j<ar[i].length; j++){
      if (ar [i][j] === '^^'){
        number++;
      }
    }
  }
  return number
};
