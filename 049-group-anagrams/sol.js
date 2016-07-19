/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  var map = {}
  strs.forEach(str => {
    let key = str.split('').sort().join('')
    map[key] = map[key] || []
    map[key].push(str)
  })
  return Object.keys(map).map(k => map[k])
}
