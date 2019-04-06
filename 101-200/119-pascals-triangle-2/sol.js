/**
 * @param {number} rowIndex
 * @return {number[]}
 */
function getRow(rowIndex) {
  let prev = []
  let result = [1]

  for (let i = 1; i <= rowIndex; i++) {
    prev = result
    result = []

    for (let j = 0; j < i + 1; j++) {
      if (j === 0 || j === i) {
        result.push(1)
      } else {
        result.push(prev[j - 1] + prev[j])
      }
    }
  }

  return result
}
