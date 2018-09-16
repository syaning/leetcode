/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
  const rows = grid.length
  const cols = grid[0].length

  if (rows < 3 || cols < 3) {
    return 0
  }

  let count = 0
  for (let i = 0; i < rows - 2; i++) {
    for (let j = 0; j < cols - 2; j++) {
      const subgrid = grid.slice(i, i + 3).map(row => row.slice(j, j + 3))

      if (subgrid[1][1] !== 5) {
        continue
      }

      const nums = subgrid[0].concat(subgrid[1]).concat(subgrid[2])
      const numMatch = new Set(nums).size === 9 && nums.every(n => n >= 1 && n <= 9)
      if (!numMatch) {
        continue
      }

      const rowSums = subgrid.map(r => r[0] + r[1] + r[2])
      const colSums = [0, 1, 2].map(c => subgrid[0][c] + subgrid[1][c] + subgrid[2][c])
      const sumD1 = subgrid[0][0] + subgrid[1][1] + subgrid[2][2]
      const sumD2 = subgrid[0][2] + subgrid[1][1] + subgrid[2][0]

      if (new Set(rowSums.concat(colSums).concat([sumD1, sumD2])).size === 1) {
        count += 1
      }
    }
  }

  return count
}
