/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var map = {},
        len = nums.length,
        num, i;
    for (i = 0; i < len; i++) {
        num = nums[i];
        if (map[target - num]) {
            return [map[target - num], i + 1];
        }
        if (!map[num]) {
            map[num] = i + 1;
        }
    }
};