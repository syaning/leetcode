class Solution(object):

    def romanToInt(self, s):
        """
        :type s: str
        :rtype: int
        """
        vals = [
            1000, 900, 500, 400, 100, 90,
            50, 40, 10, 9, 5, 4, 1
        ]
        symbols = [
            'M', 'CM', 'D', 'CD', 'C', 'XC',
            'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'
        ]
        result = 0
        i = 0
        while len(s) > 0:
            while s.startswith(symbols[i]):
                s = s[len(symbols[i]):]
                result += vals[i]
            i += 1
        return result
