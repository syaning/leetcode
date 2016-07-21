class Solution(object):

    def spiralOrder(self, matrix):
        """
        :type matrix: List[List[int]]
        :rtype: List[int]
        """
        if not matrix:
            return []

        top, bottom, left, right = 0, len(matrix) - 1, 0, len(matrix[0]) - 1
        direction = 0
        result = []

        while True:
            if direction == 0:
                for i in range(left, right + 1):
                    result.append(matrix[top][i])
                top += 1
            elif direction == 1:
                for i in range(top, bottom + 1):
                    result.append(matrix[i][right])
                right -= 1
            elif direction == 2:
                for i in range(right, left - 1, -1):
                    result.append(matrix[bottom][i])
                bottom -= 1
            elif direction == 3:
                for i in range(bottom, top - 1, -1):
                    result.append(matrix[i][left])
                left += 1

            if top > bottom or left > right:
                return result

            direction = (direction + 1) % 4
