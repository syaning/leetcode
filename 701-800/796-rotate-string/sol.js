/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function(A, B) {
  if (A.length !== B.length) {
    return false
  }

  if (!A && !B) {
    return true
  }

  for (let i = 0; i < A.length; i++) {
    if (A.slice(i) + A.slice(0, i) === B) {
      return true
    }
  }

  return false
}

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString2 = function(A, B) {
  if (A.length !== B.length) {
    return false
  }

  return (A + A).indexOf(B) >= 0
}
