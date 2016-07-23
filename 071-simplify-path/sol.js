/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  path = path.substring(1).split('/')
  var result = []
  for (let p of path) {
    if (!p || p === '.') {
      continue
    } else if (p === '..') {
      result.pop()
    } else {
      result.push(p)
    }
  }
  return '/' + result.join('/')
}
