class Solution(object):

    def getRow(self, rowIndex):
        """
        :type rowIndex: int
        :rtype: List[int]
        """
        prev, result = [], [1]

        for i in range(1, rowIndex + 1):
            prev, result = result, []
            for j in range(i + 1):
                if j == 0 or j == i:
                    result.append(1)
                else:
                    result.append(prev[j - 1] + prev[j])

        return result
