/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
  let result = ['']
  S.split('').forEach(c => {
    if (c >= 'A' && c <= 'z') {
      result = result.reduce((ret, p) => {
        ret.push(p + c.toLowerCase(), p + c.toUpperCase())
        return ret
      }, [])
    } else {
      result = result.map(p => p + c)
    }
  })
  return result
}
