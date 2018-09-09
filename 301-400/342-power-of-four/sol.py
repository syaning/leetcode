class Solution:

    def isPowerOfFour(self, num):
        """
        :type num: int
        :rtype: bool
        """
        if num < 1:
            return False
        if num == 1:
            return True
        return num % 4 == 0 and self.isPowerOfFour(num / 4)

    def isPowerOfFour2(self, num):
        """
        :type num: int
        :rtype: bool
        """
        if num < 1:
            return False
        while num % 4 == 0:
            num = num / 4
        return num == 1

    def isPowerOfFour2(self, num):
        """
        :type num: int
        :rtype: bool
        """
        s = bin(num)[2:]
        return s[0] == '1' and len(s) % 2 == 1 and all([c == '0' for c in s[1:]])
