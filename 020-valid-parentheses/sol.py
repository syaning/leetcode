class Solution(object):

    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
        stack, labels = [], {'(': ')', '[': ']', '{': '}'}
        for ch in s:
            if ch in labels:
                stack.append(ch)
            elif len(stack) == 0 or labels[stack.pop()] != ch:
                return False
        return len(stack) == 0
