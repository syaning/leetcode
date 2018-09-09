/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  var red = 0
  var blue = nums.length - 1
  var i = 0

  while (i <= blue) {
    if (nums[i] === 0) {
      swap(nums, i, red)
      red++
      i++
    } else if (nums[i] === 2) {
      swap(nums, i, blue)
      blue--
    } else {
      i++
    }
  }

  function swap(nums, i, j) {
    var temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
  }
}
