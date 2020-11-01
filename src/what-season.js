const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
	if (date === undefined) {
		return 'Unable to determine the time of year!';
	} else if ( Object.prototype.toString.call(date) != '[object Date]') {
		throw new Error('THROWN');
	} else if (1 < date.getMonth() && date.getMonth() < 5) {
		return 'spring';
	 } else if (4 < date.getMonth() && date.getMonth() < 8) {
		return 'summer';
	 } else if (7 < date.getMonth() && date.getMonth() < 11) {
		return 'autumn';
	 } else {
		return 'winter';
	 }
};
