/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
	var lookup = {};
	for (var i = 0; i < nums.length; i++) {
		var num = nums[i];
		if (lookup[num]) {
			return true;
		}
		lookup[num] = true;
	}
	return false;
};

// or

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate_2 = function(nums) {
	return nums.length > new Set(nums).size;
};