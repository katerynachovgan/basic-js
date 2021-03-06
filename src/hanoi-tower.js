const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
  // remove line with error and write your code here
//   Реализуйте функцию `calculateHanoi`, которая принимает параметры `diskNumber` и 
//   `turnsSpeed`. `diskNumber` — это число **дисков**, а `turnsSpeed` — скорость 
//   перемещения дисков (в **ходах** в **час**). Оба параметра являются числами (тип `number`)

// Функция `calculateHanoi` возвращает объект с 2 свойствами:
// * `turns` (минимальное число (тип `number`) ходов, необходимое для решения головоломки)
// * `seconds` (минимальное число (тип `number`) **секунд**, необходимое для решения
//  головоломки при заданной скорости; должно быть целым числом, полученным в результате
//   округления результата расчетов в меньшую **(floor)** сторону)
let turns = Math.pow(2, disksNumber) - 1;
let seconds = Math.trunc((turns * 3600)/turnsSpeed);
return { turns, seconds}

};
