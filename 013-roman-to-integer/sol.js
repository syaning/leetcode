/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
	var vals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
	var symbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
	var result = 0

	for (let i = 0; s.length > 0; i++) {
		while (s.startsWith(symbols[i])) {
			s = s.substring(symbols[i].length)
			result += vals[i]
		}
	}

	return result
}