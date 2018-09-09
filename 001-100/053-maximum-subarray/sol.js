/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  var newSum = nums[0]
  var maxSum = nums[0]

  for (let i = 1; i < nums.length; i++) {
    newSum = Math.max(newSum + nums[i], nums[i])
    maxSum = Math.max(maxSum, newSum)
  }

  return maxSum
}
