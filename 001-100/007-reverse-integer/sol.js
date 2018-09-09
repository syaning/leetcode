/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  if (x < 0) {
    return -reverse(-x)
  }

  var val = 0
  while (x > 0) {
    val = val * 10 + x % 10
    x = x / 10 >> 0
  }
  return val <= 2147483647 ? val : 0
}
