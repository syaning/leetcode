/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
	var prev = 0;
	var current = 1;
	for (var i = 0; i < n; i++) {
		current = prev + current;
		prev = current - prev;
	}
	return current;
};