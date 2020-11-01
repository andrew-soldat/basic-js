const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
	constructor (value = true) {
		this.valuetMachine = value;
	}
	encrypt(message, key) {
		if (!message || !key) throw new Error();
		const copyMes = message.toUpperCase();
		const copyKey = key.toUpperCase();
		let result = '';
		for (let i = 1, j = 1; i <= copyMes.length; i++) {
			let letter = copyMes[i - 1];
			if (65 > letter.charCodeAt() || letter.charCodeAt() > 90) {
				result += letter;
				continue;
			}
			result += String.fromCharCode(((letter.charCodeAt() + copyKey[j - 1].charCodeAt() - 130) % 26) + 65);
			if (j % key.length === 0) j = 0;
			j++;
	  }

		return this.valuetMachine === true ? result : result.split('').reverse().join('');
	}    
	decrypt(encryptMessage, key) {
		if (!encryptMessage || !key) throw new Error();
		const copyKey = key.toUpperCase();
		let result = '';
		for (let i = 1, j = 1; i <= encryptMessage.length; i++) {
			let letter = encryptMessage[i - 1];
			if (65 > letter.charCodeAt() || letter.charCodeAt() > 90) {
				result += letter;
				 continue;
			}
			result += String.fromCharCode(((letter.charCodeAt() - copyKey[j - 1].charCodeAt() + 26) % 26) + 65);
			if (j % key.length === 0) j = 0;
			j++;
	  }
	  return this.valuetMachine === true ? result : result.split('').reverse().join('');
	}
}

module.exports = VigenereCipheringMachine;
