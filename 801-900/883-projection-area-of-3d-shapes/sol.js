/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function(grid) {
  const rows = grid.length
  const cols = grid[0].length
  let x = new Array(rows).fill(0)
  let y = new Array(cols).fill(0)
  let z = 0

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let c = grid[i][j]
      if (c > 0) {
        z += 1
      }
      if (c > x[i]) {
        x[i] = c
      }
      if (c > y[j]) {
        y[j] = c
      }
    }
  }

  let total = z
  x.forEach(i => total += i)
  y.forEach(i => total += i)

  return total
}
