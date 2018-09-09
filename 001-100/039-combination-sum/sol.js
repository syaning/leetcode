/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  var result = []
  candidates.sort((a, b) => a - b)
  combination(candidates, target, 0, [], result)
  return result
}

function combination(candidates, target, start, nums, result) {
  if (target === 0) {
    result.push(nums.slice())
    return
  }

  for (let i = start; i < candidates.length; i++) {
    if (i > start && candidates[i] === candidates[i - 1]) {
      continue
    }
    if (candidates[i] <= target) {
      nums.push(candidates[i])
      combination(candidates, target - candidates[i], i, nums, result)
      nums.pop()
    }
  }
}
