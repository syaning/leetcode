class Solution(object):

    def isNumber(self, s):
        """
        :type s: str
        :rtype: bool
        """
        s = s.strip()
        num = dot = exp = False
        for i, c in enumerate(s):
            if c.isdigit():
                num = True
            elif c == '.':
                if exp or dot:
                    return False
                dot = True
            elif c == 'e':
                if exp or not num:
                    return False
                exp, num = True, False
            elif c == '+' or c == '-':
                if i == 0:
                    continue
                if s[i - 1] != 'e':
                    return False
            else:
                return False
        return num
