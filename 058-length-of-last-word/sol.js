/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
	var words = s.trim().split(/\s+/g);
	return words[words.length - 1].length;
};