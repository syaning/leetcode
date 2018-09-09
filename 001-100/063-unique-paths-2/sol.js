/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  var m = obstacleGrid

  for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < m[i].length; j++) {
      if (i === 0 && j === 0) {
        m[i][j] = 1 - m[i][j]
      } else if (i === 0) {
        m[i][j] = m[i][j] === 1 ? 0 : m[i][j - 1]
      } else if (j === 0) {
        m[i][j] = m[i][j] === 1 ? 0 : m[i - 1][j]
      } else {
        m[i][j] = m[i][j] === 1 ? 0 : m[i][j - 1] + m[i - 1][j]
      }
    }
  }

  var a = m[m.length - 1]
  return a[a.length - 1]
}
