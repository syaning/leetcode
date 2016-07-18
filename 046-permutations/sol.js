/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  if (nums.length === 1) {
    return [nums]
  }

  var result = []
  for (let i = 0; i < nums.length; i++) {
    var copy = nums.slice()
    var n = copy.splice(i, 1)[0]
    permute(copy).forEach(arr => {
      arr.unshift(n)
      result.push(arr)
    })
  }

  return result
}
