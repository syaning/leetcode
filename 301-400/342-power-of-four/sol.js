/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
  if (num < 1) {
    return false
  }
  if (num === 1) {
    return true
  }
  return num % 4 === 0 && isPowerOfFour(num / 4)
}

/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour2 = function(num) {
  if (num < 1) {
    return false
  }
  while (num % 4 === 0) {
    num /= 4
  }
  return num === 1
}

/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour3 = function(num) {
  const str = num.toString(2)
  return str[0] === '1' &&
    str.length % 2 == 1 &&
    str.slice(1).split('').every(b => b === '0')
}
