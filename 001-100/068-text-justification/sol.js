/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
  var result = []
  var current = []
  var curLen = 0

  for (let i = 0; i < words.length; i++) {
    let word = words[i]

    if (curLen + word.length <= maxWidth) {
      current.push(word)
      curLen += word.length + 1
    } else {
      result.push(adjust(current, maxWidth))
      current = [word]
      curLen = word.length + 1
    }
  }

  var last = current.join(' ')
  var pads = maxWidth - last.length
  for (let i = 0; i < pads; i++) {
    last += ' '
  }
  result.push(last)

  return result

  function adjust(words, maxWidth) {
    var len = words.reduce((ret, word) => ret + word.length, 0)
    var pads = maxWidth - len

    if (words.length === 1) {
      for (let i = 0; i < pads; i++) {
        words.push(' ')
      }
      return words.join('')
    }

    var avg = pads / (words.length - 1) >> 0
    var mod = pads % (words.length - 1)
    var result = []

    for (let i = 0; i < words.length - 1; i++) {
      result.push(words[i])
      if (i < mod) {
        result.push(' ')
      }
      for (let j = 0; j < avg; j++) {
        result.push(' ')
      }
    }
    result.push(words[words.length - 1])

    return result.join('')
  }
}
