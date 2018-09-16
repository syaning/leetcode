/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
  return A.map(row => row.slice().reverse().map(x => 1 - x))
}
