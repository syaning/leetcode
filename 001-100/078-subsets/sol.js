/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  var result = [
    []
  ]

  for (let i = 0; i < nums.length; i++) {
    let size = result.length
    for (let j = 0; j < size; j++) {
      result.push(result[j].concat([nums[i]]))
    }
  }

  return result
}
