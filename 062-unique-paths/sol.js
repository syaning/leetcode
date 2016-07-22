/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  function factorial(x) {
    if (x === 0 || x === 1) {
      return 1
    }
    return x * factorial(x - 1)
  }

  return factorial(m + n - 2) / factorial(m - 1) / factorial(n - 1)
}
