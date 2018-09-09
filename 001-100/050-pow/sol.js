/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (n < 0) {
    return 1 / myPow(x, -n)
  }
  if (n === 0) {
    return 1
  }
  var half = myPow(x, n / 2 >> 0)
  return n % 2 === 0 ? half * half : half * half * x
}
