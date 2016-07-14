class Solution(object):

    def myAtoi(self, s):
        """
        :type s: str
        :rtype: int
        """
        INT_MAX, INT_MIN = 2147483647, -2147483648
        if not s:
            return 0
        i, result, sign = 0, 0, 1
        s = s.strip()

        if s[i] == '+':
            i += 1
        elif s[i] == '-':
            sign = -1
            i += 1

        while i < len(s) and s[i] >= '0' and s[i] <= '9':
            num = int(s[i])
            if result > (INT_MAX - num) / 10:
                return INT_MAX if sign > 0 else INT_MIN
            result = result * 10 + num
            i += 1

        return sign * result
