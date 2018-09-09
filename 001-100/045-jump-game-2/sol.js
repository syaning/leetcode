/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  var result = 0
  var current = 0
  var last = 0

  for (let i = 0; i < nums.length; i++) {
    if (i > last) {
      last = current
      result++
    }
    current = Math.max(current, nums[i] + i)
  }

  return result
}
