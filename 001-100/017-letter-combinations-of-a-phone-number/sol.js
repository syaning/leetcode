/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  var table = [
    [],
    [],
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
    ['j', 'k', 'l'],
    ['m', 'n', 'o'],
    ['p', 'q', 'r', 's'],
    ['t', 'u', 'v'],
    ['w', 'x', 'y', 'z']
  ]
  digits = digits.split('')
  var result = digits.reduce((ret, num) => {
    return combine(ret, table[num])
  }, [])
  return result

  function combine(arr1, arr2) {
    if (!arr1.length) {
      return arr2
    }
    if (!arr2.length) {
      return arr1
    }
    var result = []
    arr1.forEach(a => {
      arr2.forEach(b => {
        result.push(a + b)
      })
    })
    return result
  }
}
