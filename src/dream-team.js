const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let result = []
  if (Array.isArray(members)) {
    members.forEach((element) => {
      if(typeof(element) === 'string') { 
        result.push(element.trim()[0].toUpperCase());
    }}
    )};
    return result.sort().join('')

 
};
