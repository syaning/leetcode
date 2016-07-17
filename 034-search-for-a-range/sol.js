/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  return search(nums, target, 0, nums.length - 1)
}

function search(nums, target, l, r) {
  if (l > r) {
    return [-1, -1]
  }

  var m = (l + r) / 2 >> 0

  if (nums[m] < target) {
    return search(nums, target, m + 1, r)
  } else if (nums[m] > target) {
    return search(nums, target, l, m - 1)
  } else {
    let left = search(nums, target, l, m - 1)
    let right = search(nums, target, m + 1, r)

    return [
      left[0] === -1 ? m : left[0],
      right[1] === -1 ? m : right[1]
    ]
  }
}
