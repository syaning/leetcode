class Solution(object):

    def multiply(self, num1, num2):
        """
        :type num1: str
        :type num2: str
        :rtype: str
        """
        if num1 == '0' or num2 == '0':
            return '0'

        num1 = list(map(lambda x: int(x), num1))
        num2 = list(map(lambda x: int(x), num2))
        num1.reverse()
        num2.reverse()
        result = [0 for i in range(len(num1) + len(num2) - 1)]

        for i, a in enumerate(num1):
            for j, b in enumerate(num2):
                result[i + j] += a * b

        for i, n in enumerate(result):
            if i < len(result) - 1 and n >= 10:
                result[i] = n % 10
                result[i + 1] += n // 10

        result = list(map(lambda x: str(x), result))
        result.reverse()
        return ''.join(result)
