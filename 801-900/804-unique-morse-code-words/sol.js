/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
  const morseList = [
    '.-', '-...', '-.-.', '-..', '.', '..-.', '--.',
    '....', '..', '.---', '-.-', '.-..', '--', '-.',
    '---', '.--.', '--.-', '.-.', '...', '-',
    '..-', '...-', '.--', '-..-', '-.--', '--..'
  ]

  const morseMap = 'abcdefghijklmnopqrstuvwxyz'.split('').reduce((ret, l, i) => {
    ret[l] = morseList[i]
    return ret
  }, {})

  const codeMap = {}
  words.forEach(w => {
    const codes = w.split('').reduce((ret, l) => {
      ret.push(morseMap[l])
      return ret
    }, []).join('')
    codeMap[codes] = true
  })

  return Object.keys(codeMap).length
}
