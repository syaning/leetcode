/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs.length) {
        return ''
    }
    var i = 1
    var prefix = ''
    while (i <= strs[0].length && (prefix = strs[0].substring(0, i))) {
        var isCommonPrefix = strs.every(str => str.startsWith(prefix))
        if (isCommonPrefix) {
            i++
        } else {
            return prefix.substring(0, prefix.length - 1)
        }
    }
    return prefix
}