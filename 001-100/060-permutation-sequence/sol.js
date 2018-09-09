/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  var fac = [1]
  for (let i = 1; i <= n; i++) {
    fac[i] = fac[i - 1] * i
  }

  var str = []
  for (let i = 1; i <= n; i++) {
    str.push('' + i)
  }

  var result = []
  for (let i = 0; i < n; i++) {
    let index = (k - 1) / fac[n - i - 1] >> 0
    result.push(str[index])
    str.splice(index, 1)
    k = (k - 1) % fac[n - i - 1] + 1
  }

  return result.join('')
}
