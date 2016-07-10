/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
	var map = {}
	var ans = 0

	for (let i = 0, j = 0; j < s.length; j++) {
		let ch = s[j]

		if (map[ch] !== undefined) {
			i = Math.max(map[ch], i)
		}

		ans = Math.max(ans, j - i + 1)
		map[ch] = j + 1
	}

	return ans
}