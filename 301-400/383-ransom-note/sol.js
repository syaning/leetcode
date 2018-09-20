/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const map = {}
    magazine.split('').forEach(c => {
        map[c] = (map[c] || 0) + 1
    })

    for (let c of ransomNote) {
        if (!map[c]) {
            return false
        }
        map[c]--
    }

    return true
}
