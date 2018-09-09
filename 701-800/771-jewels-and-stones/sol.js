/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  let count = 0
  for (let s of S.split('')) {
    if (J.indexOf(s) >= 0) {
      count++
    }
  }
  return count
}
