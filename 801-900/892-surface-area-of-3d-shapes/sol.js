/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
  let surface = 0
  let rows = grid.length
  let cols = grid[0].length

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let c = grid[i][j]

      if (c === 0) {
        continue
      }

      let front = i == rows - 1 ? c : Math.max(0, c - grid[i + 1][j])
      let back = i === 0 ? c : Math.max(0, c - grid[i - 1][j])
      let left = j === 0 ? c : Math.max(0, c - grid[i][j - 1])
      let right = j === cols - 1 ? c : Math.max(0, c - grid[i][j + 1])

      surface = surface + front + back + left + right + 2
    }
  }

  return surface
}
