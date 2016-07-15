/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  const INT_MAX = 2147483647
  const INT_MIN = -2147483648

  if (!str) {
    return 0
  }

  var i = 0
  var result = 0
  var sign = 1

  str = str.trim()

  if (str[i] === '+') {
    i++
  } else if (str[i] === '-') {
    sign = -1
    i++
  }

  while (i < str.length && str[i] >= '0' && str[i] <= '9') {
    let num = +str[i]

    if (result > (INT_MAX - num) / 10) {
      return sign > 0 ? INT_MAX : INT_MIN
    }

    result = result * 10 + num
    i++
  }

  return sign * result
}
