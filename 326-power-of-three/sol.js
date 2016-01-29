/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
	if (n <= 0) {
		return false;
	}
	if (n === 1) {
		return true;
	}
	var r = n / 3;
	return r >> 0 === r ? isPowerOfThree(r) : false;
};