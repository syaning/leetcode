/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (!matrix.length) {
    return []
  }

  var top = 0
  var bottom = matrix.length - 1
  var left = 0
  var right = matrix[0].length - 1
  var direction = 0
  var result = []

  while (true) {
    if (direction === 0) {
      for (let i = left; i <= right; i++) {
        result.push(matrix[top][i])
      }
      top++
    } else if (direction === 1) {
      for (let i = top; i <= bottom; i++) {
        result.push(matrix[i][right])
      }
      right--
    } else if (direction === 2) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i])
      }
      bottom--
    } else if (direction === 3) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left])
      }
      left++
    }

    if (top > bottom || left > right) {
      return result
    }

    direction = (++direction) % 4
  }
}
