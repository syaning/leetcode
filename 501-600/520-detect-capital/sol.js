/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  return word.toUpperCase() === word || word.slice(1).toLowerCase() === word.slice(1)
}
