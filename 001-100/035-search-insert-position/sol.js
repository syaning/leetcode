/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  if (!nums.length) {
    return 0
  }

  var l = 0
  var r = nums.length - 1

  while (l <= r) {
    let m = (l + r) / 2 >> 0

    if (nums[m] === target) {
      return m
    }

    if (nums[m] > target) {
      r = m - 1
    } else {
      l = m + 1
    }
  }

  return l
}
