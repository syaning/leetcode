/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
	if (num <= 0) {
		return false;
	}
	for (var i of [2, 3, 5]) {
		while (num % i === 0) {
			num = num / i;
		}
	}

	return num === 1;
};