/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
var numberOfLines = function(widths, S) {
  const widthMap = 'abcdefghijklmnopqrstuvwxyz'.split('').reduce((ret, l, i) => {
    ret[l] = widths[i]
    return ret
  }, {})

  let lines = 0
  let units = 0

  S.split('').forEach(l => {
    if (units + widthMap[l] > 100) {
      lines += 1
      units = widthMap[l]
    } else {
      units += widthMap[l]
    }
  })

  return [lines + 1, units]
}
