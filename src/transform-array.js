const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
	let newArr = [];
	if (arr.constructor !== Array) return 'Error';
	for (let i = 0; i < arr.length; i++) {
		switch (arr[i]) {
			case '--double-prev':
			  if (i !== 0 && arr[i - 2] !== '--discard-next') {
				 newArr.push(arr[i - 1]);
			  }
			break;
			case '--double-next':
			  if (i !== arr.length - 1) {
				 newArr.push(arr[i + 1]);
			  }
			break;
			case '--discard-prev':
			  if (i !== 0 && arr[i - 2] !== '--discard-next') {
				 newArr.pop();
			  }
			break;
			case '--discard-next':
			  ++i;
			break;
			default:
			  newArr.push(arr[i]);
			break;
		}
	}
	return newArr;
};
