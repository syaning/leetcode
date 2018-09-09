class Solution(object):

    def numTrees(self, n):
        """
        :type n: int
        :rtype: int
        """
        count = [1 if i <= 1 else 0 for i in range(n + 1)]
        for i in range(2, n + 1):
            for j in range(i):
                count[i] += count[j] * count[i - j - 1]
        return count[n]
