/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  return searchInRange(nums, 0, nums.length - 1, target)
}

function searchInRange(nums, start, end, target) {
  if (start === end) {
    return nums[start] === target ? start : -1
  }

  const mid = (start + end) / 2 >> 0
  if (nums[mid] === target) {
    return mid
  } else if (nums[mid] < target) {
    return searchInRange(nums, mid + 1, end, target)
  } else {
    return searchInRange(nums, start, mid, target)
  }
}
