/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
	if (n === 1) {
		return '1';
	}
	return sayNum(countAndSay(n - 1));
};

function sayNum(n) {
	var nums = ('' + n).split('');
	var result = [];
	var num = null;
	var count = 0;

	nums.forEach(function(x) {
		if (x === num) {
			count++;
		} else {
			if (count) {
				result.push(count, num);
			}
			num = x;
			count = 1;
		}
	});
	result.push(count, num);

	return result.join('');
}