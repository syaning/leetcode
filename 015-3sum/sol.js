/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
	var set = new Set(nums)
	var result = []
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			let sum = -nums[i] - nums[j]
			if (set.has(sum)) {
				result.push([nums[i], nums[j], -sum])
			}
		}
	}
	return result
}