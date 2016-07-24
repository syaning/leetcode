/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  var i = nums.length - 2
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--
  }

  if (i < 0) {
    nums.sort((a, b) => a - b)
    return
  }

  var j = i + 1
  while (j < nums.length && nums[j] > nums[i]) {
    j++
  }
  j--

  var temp = nums[i]
  nums[i] = nums[j]
  nums[j] = temp

  for (var k = 0; k < (nums.length - i) / 2 >> 0; k++) {
    temp = nums[i + k + 1]
    nums[i + k + 1] = nums[nums.length - k - 1]
    nums[nums.length - k - 1] = temp
  }
}
