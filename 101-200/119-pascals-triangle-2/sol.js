/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
	var result = [];
	for (var i = 0; i <= rowIndex; i++) {
		result.push(combination(rowIndex, i));
	}
	return result;
};

function factorial(n) {
	return n === 0 ? 1 : factorial(n - 1) * n;
}

function combination(n, m) {
	return factorial(n) / factorial(m) / factorial(n - m);
}