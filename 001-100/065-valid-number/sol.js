/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
  s = s.trim()

  var num = false
  var dot = false
  var exp = false

  for (let i = 0; i < s.length; i++) {
    let c = s[i]

    if (c >= '0' && c <= '9') {
      num = true
    } else if (c === '.') {
      if (exp || dot) {
        return false
      }
      dot = true
    } else if (c === 'e') {
      if (exp || !num) {
        return false
      }
      exp = true
      num = false
    } else if (c === '+' || c === '-') {
      if (i === 0) {
        continue
      }
      if (s[i - 1] !== 'e') {
        return false
      }
    } else {
      return false
    }
  }

  return num
}
