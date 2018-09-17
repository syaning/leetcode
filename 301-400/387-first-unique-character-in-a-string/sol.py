class Solution:

    def firstUniqChar(self, s):
        """
        :type s: str
        :rtype: int
        """
        m = {}
        for c in s:
            m[c] = m.get(c, 0) + 1
        for i in range(len(s)):
            if m[s[i]] == 1:
                return i
        return -1
