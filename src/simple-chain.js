const CustomError = require("../extensions/custom-error");

const chainMaker = {
  resultChain: [],
  getLength() {
    // remove line with error and write your code here
    return this.resultChain.length;
  },
  addLink(value) {
    // remove line with error and write your code here
    // if (value === ''){
    //   this.resultChain.push(`( )`);
    // } else
      this.resultChain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    // remove line with error and write your code here
    if (position <= 0 || position >= this.getLength || typeof position !== 'number'){
      this.resultChain = [];
      throw new Error();
    } 
    this.resultChain.splice(position-1,1);
    return this;
  },
  reverseChain() {
    // remove line with error and write your code here
    this.resultChain.reverse();
    return this;
  },
  finishChain() {
    // remove line with error and write your code here
    let result = this.resultChain.join('~~');
    this.resultChain = [];
    return result;
  }
};

module.exports = chainMaker;
