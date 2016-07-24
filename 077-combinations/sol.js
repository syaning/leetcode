/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  var result = []
  helper(n, k, 1, [], result)
  return result
}

function helper(n, k, m, nums, result) {
  if (nums.length === k) {
    result.push(nums.slice())
    return
  }

  for (let i = m; i <= n; i++) {
    nums.push(i)
    helper(n, k, i + 1, nums, result)
    nums.pop()
  }
}
