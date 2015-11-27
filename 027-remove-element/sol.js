/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var left = 0,
        right = nums.length - 1;

    while (left <= right) {
        if (nums[left] === val) {
            nums[left] = nums[right];
            right--;
        } else {
            left++;
        }
    }

    return right + 1;
};