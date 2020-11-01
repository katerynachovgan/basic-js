const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(massage, key) {
    // remove line with error and write your code here
    if (massage === undefined || key === undefined) {
      throw new Error;
    }

    const alphabetLength = 26;

    massage = massage.toUpperCase();
    key = key.toUpperCase();

    let result = '';
    let resultkey = key;

    while (massage.length > resultkey.length) {
      resultkey += `${key}`;
    }

    for (let i = 0, j = 0; i < massage.length; i++, j++) {
      if (massage.charCodeAt(i) >= 65 && massage.charCodeAt(i) <= 90) {
        let c = String.fromCharCode(((massage.charCodeAt(i) + resultkey.charCodeAt(j)) % alphabetLength) + 65);
        result += c;
      } else {
        result += massage[i];
        j--;
      }
    }

    if (this.direct === false) return result.split('').reverse().join('');
    else return result;
  }


  decrypt(massage, key) {
    // remove line with error and write your code here
    if (massage === undefined || key === undefined) {
      throw new Error;
    }

    const alphabetLength = 26;

    massage = massage.toUpperCase();
    key = key.toUpperCase();

    let result = '';
    let resultkey = `${key}`;

    while (massage.length > resultkey.length) {
      resultkey += key;
    }

    for (let i = 0, j = 0; i < massage.length; i++, j++) {

      if (massage.charCodeAt(i) >= 65 && massage.charCodeAt(i) <= 90) {
        let c = String.fromCharCode(((massage.charCodeAt(i) + alphabetLength - resultkey.charCodeAt(j)) % alphabetLength) + 65);
        result += c;
      } else {
        result += massage[i];
        j--;
      }
    }

    if (this.direct === false) return result.split('').reverse().join('');
    else return result;
  }
}

module.exports = VigenereCipheringMachine;