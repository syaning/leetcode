/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if (num1 === '0' || num2 === '0') {
    return '0'
  }

  num1 = num1.split('').map(n => +n).reverse()
  num2 = num2.split('').map(n => +n).reverse()

  var result = []

  num1.forEach((a, i) => {
    num2.forEach((b, j) => {
      result[i + j] = (result[i + j] || 0) + a * b
    })
  })

  result.forEach((n, i) => {
    if (n >= 10) {
      result[i] = n % 10
      result[i + 1] = (result[i + 1] || 0) + (n / 10 >> 0)
    }
  })

  return result.reverse().join('')
}
