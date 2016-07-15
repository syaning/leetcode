/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  var result = []
  next(n, n, '', result)
  return result

  function next(l, r, s, res) {
    if (r < l) {
      return
    }
    if (l === 0 && r === 0) {
      res.push(s)
    }
    if (l > 0) {
      next(l - 1, r, s + '(', res)
    }
    if (r > 0) {
      next(l, r - 1, s + ')', res)
    }
  }
}
