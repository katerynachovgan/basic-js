const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {
  // remove line with error and write your code here
 
  // `str` это **строка**, которая будет повторена
  // *	`options` это **объект** опций, который содержит следующие свойства:
  //   -	`repeatTimes` устанавливает число повторений `str`
  //   - `separator` это строка, разделяющая повторения `str`
  //   - `addition` это дополнительная строка, которая будет добавлена после каждого повторения `str`
  //   - `additionRepeatTimes` устанавливает число повторений `addition`
  //   - `additionSeparator` это строка, разделяющая повторения `addition`
//   Единственный обязательный параметр — это `str`, остальные могут не быть переданы.
// Значение `separator` по умолчанию это `'+'`. Значение `additionSeparator` по умолчанию это `'|'`
  if (repeatTimes = undefined) rt = 1;
  // if (repeatTimes) 
  let rt = options.repeatTimes;
  if (rt === undefined) rt = 1; 
  console.log(rt);

  let aRT = options.additionRepeatTimes;
  if (aRT === undefined) aRT = 1; 
  console.log(aRT);

  let sep = options.separator;
   if (sep === undefined) sep = '+'; 
  console.log(sep);

  let addsep = options.additionSeparator;
  if(addsep === undefined) addsep = '|';
  console.log(addsep);

  let add = options.addition;
  if (add === undefined) add = '';
  console.log(add);
  
  let result = '';

  for (let i = 0; i < rt; i++){
    result +=`${str}`;

      for (let j = 0; j < aRT; j++){
        if (j !== aRT-1){  
        result += `${add}${addsep}`}
         else {result += `${add}`}
        }
        if (i === rt-1) return result;
        result +=`${sep}`
      }
  return result;
};
  