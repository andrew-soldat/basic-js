const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
	let resultAddStr = '';
	let resultStr = '';
	if (typeof str !== 'string') str = String(str);
	if (options === undefined) return str;
	let repeat = options.hasOwnProperty('repeatTimes') ? options.repeatTimes : 1;
	let separator = options.hasOwnProperty('separator') ? options.separator : '+';
	let addStr = options.hasOwnProperty('addition') ? options.addition : '';
	let addRepeat = options.hasOwnProperty('additionRepeatTimes') ? options.additionRepeatTimes : 1;
	let addSeparator = options.hasOwnProperty('additionSeparator') ? options.additionSeparator : '|';
	resultAddStr = (addStr + addSeparator).repeat(addRepeat - 1) + addStr;
	return newStr = (str + resultAddStr + separator).repeat(repeat - 1) + str + resultAddStr;
};
  