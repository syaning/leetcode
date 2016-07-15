/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort((a, b) => a - b)
  var result = []

  for (let i = 0; i < nums.length; i++) {
    if (i >= 1 && nums[i] === nums[i - 1]) {
      continue
    }
    let left = i + 1
    let right = nums.length - 1
    while (left < right) {
      let sum = nums[left] + nums[right] + nums[i]
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]])
        left++
        right--
        while (left < right && nums[left] === nums[left - 1]) {
          left++
        }
        while (left < right && nums[right] === nums[right + 1]) {
          right--
        }
      } else if (sum < 0) {
        left++
        while (left < right && nums[left] === nums[left - 1]) {
          left++
        }
      } else {
        right--
        while (left < right && nums[right] === nums[right + 1]) {
          right--
        }
      }
    }
  }

  return result
}
