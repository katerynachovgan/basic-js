const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

result = [];
// array = arr;
// throw new CustomError('Not implemented');
// remove line with error and write your code here
if (!Array.isArray(arr)) throw TypeError;
if (arr === []) return [];

let l = arr.length;
let j = 0;

for (let i = 0; i < l; i++){
switch(arr[i]){

  case '--double-next': 
  if(i !== l-1){
    result[j] = arr[i+1];
    j++;
  break;
  } else {
  return result;
  } 

case '--double-prev':
if  (i !== 0){
  result[j] = arr[i-1];
  j++;}
  break;

case '--discard-next':
    if (i === l-1){
    return result;
    }
    if((arr[i+2] === '--discard-prev') || (arr[i+2] === '--double-prev')){
    i++;
    }
  i++;
  break;

case '--discard-prev':
if ( i !== 0){
  result.pop();
  j-=1;
} 
break;
default: 
  result[j] = arr[i];
  j++;
  break;
}
}
return result;
};