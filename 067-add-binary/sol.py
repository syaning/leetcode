class Solution(object):
    def addBinary(self, a, b):
        """
        :type a: str
        :type b: str
        :rtype: str
        """
        result, carry, val = [], 0, 0
        for i in range(max(len(a), len(b))):
            val = (int(a[-i - 1]) if i < len(a) else 0) + \
                (int(b[-i - 1]) if i < len(b) else 0) + carry
            result.append(str(val % 2))
            carry = val // 2
        if carry > 0:
            result.append(str(carry))
        return ''.join(result[::-1])
