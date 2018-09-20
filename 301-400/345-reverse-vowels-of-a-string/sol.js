/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const cs = s.split('')
    const vowels = 'aeiouAEIOU'
    let l = 0
    let r = s.length - 1

    while (l < r) {
        if (vowels.indexOf(cs[l]) >= 0 && vowels.indexOf(cs[r]) >= 0) {
            let temp = cs[r]
            cs[r] = cs[l]
            cs[l] = temp
            l++
            r--
        } else if (vowels.indexOf(cs[l]) >= 0) {
            r--
        } else {
            l++
        }
    }

    return cs.join('')
}
