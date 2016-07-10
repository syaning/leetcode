/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
	if (numRows <= 1) {
		return s
	}

	var result = []
	var size = 2 * numRows - 2

	for (let i = 0; i < numRows; i++) {
		for (let j = i; j < s.length; j += size) {
			result.push(s[j])
			if (i !== 0 && i !== numRows - 1 && j + size - 2 * i < s.length) {
				result.push(s[j + size - 2 * i])
			}
		}
	}

	return result.join('')
}