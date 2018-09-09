/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (!nums || !nums.length) {
    return 0
  }

  var first = 0
  var second = 0

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[second]) {
      nums[++second] = nums[i]
      first = second
    } else if (first === second) {
      nums[++second] = nums[i]
    }
  }

  return second + 1
}
