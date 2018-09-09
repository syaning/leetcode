/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  function valid(nums) {
    nums = nums.filter(x => x !== '.')
    return new Set(nums).size === nums.length
  }

  for (let i = 0; i < 9; i++) {
    if (!valid(board[i])) {
      return false
    }
  }

  for (let i = 0; i < 9; i++) {
    let nums = []
    for (let j = 0; j < 9; j++) {
      nums.push(board[j][i])
    }
    if (!valid(nums)) {
      return false
    }
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let nums = board[j * 3].slice(i * 3, i * 3 + 3)
        .concat(board[j * 3 + 1].slice(i * 3, i * 3 + 3))
        .concat(board[j * 3 + 2].slice(i * 3, i * 3 + 3))
      if (!valid(nums)) {
        return false
      }
    }
  }

  return true
}
