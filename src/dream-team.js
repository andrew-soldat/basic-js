const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
	let nameTeam = '';
  if (typeof members !== 'object' || members === null) {
    return false;
  } else {
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] === 'string') {
        nameTeam += members[i].match(/\w{1}/);
      }
    }
    return nameTeam.toUpperCase().split('').sort().join('');
  }
};
