class Solution(object):

    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """
        lookup, ans, i = {}, 0, 0

        for j, c in enumerate(s):
            if c in lookup:
                i = max(lookup[c], i)
            ans = max(ans, j - i + 1)
            lookup[c] = j + 1

        return ans
