/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
  return s.split(/\s+/).filter(x => !!x).length
}
