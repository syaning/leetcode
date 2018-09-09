/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
  let temp = A[0]
  let asc = undefined

  for (let i of A) {
    if (i === temp) {
      continue
    } else if (asc === undefined) {
      asc = i > temp
    } else {
      if ((i > temp) !== asc) {
        return false
      }
    }
    temp = i
  }

  return true
}
