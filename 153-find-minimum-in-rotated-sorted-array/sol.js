/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    var l = 0
    var r = nums.length - 1

    while (l < r) {
        let mid = (l + r) / 2 >> 0
        if (nums[mid] < nums[l]) {
            r = mid
        } else if (nums[mid] > nums[r]) {
            l = mid + 1
        } else {
            return Math.min(nums[l], nums[mid])
        }
    }

    return nums[l]
}
