class Solution(object):

    def longestValidParentheses(self, s):
        """
        :type s: str
        :rtype: int
        """
        result, stack = 0, []
        for i, c in enumerate(s):
            if c == ')' and len(stack) > 0 and s[stack[-1]] == '(':
                stack.pop()
                if len(stack) > 0:
                    result = max(result, i - stack[-1])
                else:
                    result = i + 1
            else:
                stack.append(i)
        return result
