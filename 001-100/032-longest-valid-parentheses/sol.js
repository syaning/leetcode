/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  var result = 0
  var stack = []

  for (let i = 0; i < s.length; i++) {
    let ch = s[i]
    if (ch === ')' && stack.length && s[stack[stack.length - 1]] === '(') {
      stack.pop()
      if (stack.length) {
        result = Math.max(result, i - stack[stack.length - 1])
      } else {
        result = i + 1
      }
    } else {
      stack.push(i)
    }
  }

  return result
}
