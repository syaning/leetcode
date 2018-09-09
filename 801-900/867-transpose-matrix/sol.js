/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
  const result = []

  for (let j = 0; j < A[0].length; j++) {
    result[j] = []
    for (let i = 0; i < A.length; i++) {
      result[j][i] = A[i][j]
    }
  }

  return result
}
