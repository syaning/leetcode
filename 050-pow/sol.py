class Solution(object):

    def myPow(self, x, n):
        """
        :type x: float
        :type n: int
        :rtype: float
        """
        if n < 0:
            return 1 / self.myPow(x, -n)
        if n == 0:
            return 1
        half = self.myPow(x, n // 2)
        return half * half if n % 2 == 0 else half * half * x
