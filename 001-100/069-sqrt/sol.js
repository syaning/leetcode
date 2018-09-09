/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  var i = 0
  var j = (x / 2 >> 0) + 1

  while (i <= j) {
    let mid = (i + j) / 2 >> 0
    if (mid * mid === x) {
      return mid
    } else if (mid * mid < x) {
      i = mid + 1
    } else {
      j = mid - 1
    }
  }

  return j
}
