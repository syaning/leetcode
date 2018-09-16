/**
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function(S) {
  let pos = []
  let current = ''
  let length = 0
  let start = 0

  S.split('').forEach((l, i) => {
    if (l === current) {
      length++
    } else {
      if (length >= 3) {
        pos.push([start, i - 1])
      }
      current = l
      length = 1
      start = i
    }
  })

  if (length >= 3) {
    pos.push([start, S.length - 1])
  }

  return pos
}
