class Solution:

    def isToeplitzMatrix(self, matrix):
        """
        :type matrix: List[List[int]]
        :rtype: bool
        """
        return all(matrix[i][:-1] == matrix[i + 1][1:] for i in range(len(matrix) - 1))
