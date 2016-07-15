/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
	var vals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
	var symbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
	var result = []

	for (let i = 0; num !== 0; i++) {
		while (num >= vals[i]) {
			num -= vals[i]
			result.push(symbols[i])
		}
	}

	return result.join('')
}