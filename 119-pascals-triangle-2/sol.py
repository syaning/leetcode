class Solution(object):

    def getRow(self, rowIndex):
        """
        :type rowIndex: int
        :rtype: List[int]
        """
        factorial = lambda x: 1 if x == 0 else x * factorial(x - 1)
        combination = lambda n, m: factorial(n) / factorial(m) / factorial(n - m)
        result = []
        for i in range(rowIndex + 1):
            result.append(combination(rowIndex, i))
        return result
