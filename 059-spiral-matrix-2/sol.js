/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  var matrix = []
  for (let i = 0; i < n; i++) {
    matrix[i] = []
  }

  var top = 0
  var bottom = n - 1
  var left = 0
  var right = n - 1
  var num = 1

  while (num <= n * n) {
    for (let i = left; i <= right; i++) {
      matrix[top][i] = num++
    }
    top++

    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = num++
    }
    right--

    for (let i = right; i >= left; i--) {
      matrix[bottom][i] = num++
    }
    bottom--

    for (let i = bottom; i >= top; i--) {
      matrix[i][left] = num++
    }
    left++
  }

  return matrix
}
