class Solution(object):

    def convert(self, s, numRows):
        """
        :type s: str
        :type numRows: int
        :rtype: str
        """
        if numRows <= 1:
            return s
        result = []
        size = 2 * numRows - 2
        for i in range(numRows):
            for j in range(i, len(s), size):
                result.append(s[j])
                if i != 0 and i != numRows - 1 and j + size - 2 * i < len(s):
                    result.append(s[j + size - 2 * i])
        return ''.join(result)
