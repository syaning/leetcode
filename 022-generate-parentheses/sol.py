class Solution(object):

    def generateParenthesis(self, n):
        """
        :type n: int
        :rtype: List[str]
        """
        result = []
        self.next(n, n, '', result)
        return result

    def next(self, l, r, s, res):
        if r < l:
            return
        if l == 0 and r == 0:
            res.append(s)
        if l > 0:
            self.next(l - 1, r, s + '(', res)
        if r > 0:
            self.next(l, r - 1, s + ')', res)
