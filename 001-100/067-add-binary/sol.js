/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  a = a.split('').reverse()
  b = b.split('').reverse()

  var carry = 0
  var result = []
  var len = Math.max(a.length, b.length)

  for (let i = 0; i < len; i++) {
    let sum = (+a[i] || 0) + (+b[i] || 0) + carry
    result.push(sum % 2)
    carry = sum / 2 >> 0
  }

  if (carry) {
    result.push(carry)
  }

  return result.reverse().join('')
}
