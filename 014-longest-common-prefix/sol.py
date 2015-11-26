class Solution(object):
    def longestCommonPrefix(self, strs):
        """
        :type strs: List[str]
        :rtype: str
        """
        if not strs:
            return ''

        i, prefix = 1, ''
        while i <= len(strs[0]):
            prefix = strs[0][0:i]
            for str in strs[1:]:
                if prefix != str[0:i]:
                    return prefix[0:-1]
            i += 1
        return prefix
