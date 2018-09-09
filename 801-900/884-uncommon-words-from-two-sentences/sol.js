/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
  const counter = {}
  A.split(' ').forEach(w => {
    counter[w] = (counter[w] || 0) + 1
  })
  B.split(' ').forEach(w => {
    counter[w] = (counter[w] || 0) + 1
  })
  return Object.entries(counter).reduce((ret, [w, c]) => {
    if (c === 1) {
      ret.push(w)
    }
    return ret
  }, [])
}
