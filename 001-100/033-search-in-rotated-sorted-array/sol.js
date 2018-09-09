/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (!nums.length) {
    return -1
  }

  var l = 0
  var r = nums.length - 1

  while (l <= r) {
    let m = (l + r) / 2 >> 0

    if (nums[m] === target) {
      return m
    }

    let inLeft = nums[m] > nums[l] && target >= nums[l] && target < nums[m]
    let notInRight = nums[m] < nums[l] && !(target <= nums[r] && target > nums[m])

    if (inLeft || notInRight) {
      r = m - 1
    } else {
      l = m + 1
    }
  }

  return -1
}
