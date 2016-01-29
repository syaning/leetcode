class Solution(object):

    def isPowerOfThree(self, n):
        """
        :type n: int
        :rtype: bool
        """
        if n <= 0:
            return False
        if n == 1:
            return True
        return self.isPowerOfThree(n // 3) if n % 3 == 0 else False
