/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
	var start = 0
	var end = 0

	for (let i = 0; i < s.length; i++) {
		let len1 = expandAroundCenter(s, i, i)
		let len2 = expandAroundCenter(s, i, i + 1)
		let len = Math.max(len1, len2)

		if (len > end - start) {
			if (len % 2 === 0) {
				start = i - len / 2 + 1
				end = i + len / 2
			} else {
				start = i - (len - 1) / 2
				end = end = i + (len - 1) / 2
			}
		}
	}

	return s.substring(start, end + 1)
}

function expandAroundCenter(s, left, right) {
	while (left >= 0 && right < s.length && s[left] == s[right]) {
		left--
		right++
	}
	return right - left - 1
}