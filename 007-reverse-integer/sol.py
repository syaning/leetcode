class Solution(object):
    def reverse(self, x):
        """
        :type x: int
        :rtype: int
        """
        if x < 0:
            return -self.reverse(-x)

        val = 0
        while x > 0:
            val = val * 10 + x % 10
            x = x // 10
        return val if val <= 2147483647 else 0
