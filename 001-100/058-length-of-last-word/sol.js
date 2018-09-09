/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  var words = s.trim().split(/\s+/g)
  return words.length ? words[words.length - 1].length : 0
}
