/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
  const map = {}
  for (let i = 1; i <= nums.length; i++) {
    map[i] = true
  }

  let dup
  let lost

  for (let n of nums) {
    if (n in map) {
      delete map[n]
    } else {
      dup = n
    }
  }

  lost = Number(Object.keys(map)[0])

  return [dup, lost]
}
