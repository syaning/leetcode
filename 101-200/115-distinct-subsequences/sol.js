/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
function numDistinct(s, t) {
    const dp = []

    for (let i = 0; i <= t.length; i++) {
        dp[i] = new Array(s.length + 1).fill(i === 0 ? 1 : 0)
    }

    for (let i = 1; i <= t.length; i++) {
        for (let j = 1; j <= s.length; j++) {
            dp[i][j] = dp[i][j - 1] + (t[i - 1] === s[j - 1] ? dp[i - 1][j - 1] : 0)
        }
    }

    return dp[t.length][s.length]
}
