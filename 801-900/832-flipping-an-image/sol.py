class Solution:

    def flipAndInvertImage(self, A):
        """
        :type A: List[List[int]]
        :rtype: List[List[int]]
        """
        return [[1 - x for x in reversed(row)] for row in A]
