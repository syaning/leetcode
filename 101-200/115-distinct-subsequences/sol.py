class Solution(object):

    def numDistinct(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: int
        """
        dp = [
            [1 if i == 0 else 0 for j in range(len(s) + 1)]
            for i in range(len(t) + 1)
        ]

        for i in range(1, len(t) + 1):
            for j in range(1, len(s) + 1):
                dp[i][j] = dp[i][j - 1]
                if t[i - 1] == s[j - 1]:
                    dp[i][j] += dp[i - 1][j - 1]

        return dp[-1][-1]
