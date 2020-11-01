const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
	if (+sampleActivity < 0 ||
		typeof sampleActivity !== 'string' ||
		typeof sampleActivity !== 'number') return false;
	return Math.round(Math.log(MODERN_ACTIVITY / +sampleActivity) / (Math.log(2) / HALF_LIFE_PERIOD));
};
