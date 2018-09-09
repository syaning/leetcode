/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  if (nums.length === 1) {
    return [nums]
  }

  var set = new Set()
  var result = []

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      continue
    }
    set.add(nums[i])

    var copy = nums.slice()
    var n = copy.splice(i, 1)[0]

    permuteUnique(copy).forEach(arr => {
      arr.unshift(n)
      result.push(arr)
    })
  }

  return result
}
