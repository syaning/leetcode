/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
  for (let i = 0; i < matrix.length - 1; i++) {
    const r1 = matrix[i]
    const r2 = matrix[i + 1]

    for (let j = 0; j < r1.length - 1; j++) {
      if (r1[j] !== r2[j + 1]) {
        return false
      }
    }
  }

  return true
}
