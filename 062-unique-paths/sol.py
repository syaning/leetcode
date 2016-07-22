class Solution(object):

    def uniquePaths(self, m, n):
        """
        :type m: int
        :type n: int
        :rtype: int
        """
        factorial = lambda x: 1 if x == 0 or x == 1 else x * factorial(x - 1)
        return factorial(m + n - 2) / factorial(m - 1) / factorial(n - 1)
