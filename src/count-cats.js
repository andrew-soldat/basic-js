const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
	let totalCats = 0;
	backyard.flat().map(item => item ==='^^' ? totalCats += 1 : totalCats);
	return totalCats;
};
