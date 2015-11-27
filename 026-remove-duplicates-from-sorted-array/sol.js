/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (!nums || !nums.length) {
        return 0;
    }

    var prev = 0,
        current = 1;

    while (current < nums.length) {
        if (nums[prev] !== nums[current]) {
            prev++;
            nums[prev] = nums[current];
        }
        current++;
    }

    return prev + 1;
};