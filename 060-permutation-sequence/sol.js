/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    function permuteStr(str, k) {
        if (str.length === 1) {
            return str
        }
        var size = factorial(str.length - 1)
        var i = k % size === 0 ? k / size - 1 : k / size >> 0
        k = k % size === 0 ? size : k % size
        var newStr = str.slice(0, i) + str.slice(i + 1)
        return str[i] + permuteStr(newStr, str.length - 1, k)
    }

    function factorial(n) {
        if (n === 0 || n === 1) {
            return 1
        }
        return n * factorial(n - 1)
    }

    var str = ''
    for (var i = 1; i <= n; i++) {
        str = str + i
    }
    return permuteStr(str, k)
}

console.log(getPermutation(3, 1))
