/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  let result = ''
  let i = 0

  while (i < s.length) {
    result += s.slice(i, i + k).split('').reverse().join('')
    result += s.slice(i + k, i + 2 * k)
    i += 2 * k
  }

  return result
}
