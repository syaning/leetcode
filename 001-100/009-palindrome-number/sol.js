/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) {
    return false
  }

  var copy = x
  var reverse = 0

  while (copy) {
    reverse = reverse * 10 + copy % 10
    copy = copy / 10 >> 0
  }

  return x === reverse
}
