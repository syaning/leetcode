class Solution(object):

    def intToRoman(self, num):
        """
        :type num: int
        :rtype: str
        """
        vals = [
            1000, 900, 500, 400, 100, 90,
            50, 40, 10, 9, 5, 4, 1
        ]
        symbols = [
            'M', 'CM', 'D', 'CD', 'C', 'XC',
            'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'
        ]
        result = []
        i = 0
        while num > 0:
            while num >= vals[i]:
                num -= vals[i]
                result.append(symbols[i])
            i += 1
        return ''.join(result)
