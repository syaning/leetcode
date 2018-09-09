class Solution:

    def projectionArea(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
        rows = len(grid)
        cols = len(grid[0])
        x = [0] * rows
        y = [0] * cols
        z = 0

        for i in range(rows):
            for j in range(cols):
                c = grid[i][j]
                if c > 0:
                    z += 1
                if c > x[i]:
                    x[i] = c
                if c > y[j]:
                    y[j] = c

        return sum(x) + sum(y) + z
