/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  var l = 0
  var r = matrix.length - 1

  while (l <= r) {
    let mid = (l + r) / 2 >> 0
    if (matrix[mid][0] === target) {
      return true
    } else if (matrix[mid][0] < target) {
      l = mid + 1
    } else {
      r = mid - 1
    }
  }

  if (r < 0) {
    return false
  }

  var row = r
  l = 0
  r = matrix[0].length - 1

  while (l <= r) {
    let mid = (l + r) / 2 >> 0
    if (matrix[row][mid] === target) {
      return true
    } else if (matrix[row][mid] < target) {
      l = mid + 1
    } else {
      r = mid - 1
    }
  }

  return false
}
