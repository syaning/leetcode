class Solution:

    def surfaceArea(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
        rows = len(grid)
        cols = len(grid[0])
        surface = 0

        for i in range(rows):
            for j in range(cols):
                c = grid[i][j]
                if c == 0:
                    continue
                front = c if i == rows - 1 else max(0, c - grid[i + 1][j])
                back = c if i == 0 else max(0, c - grid[i - 1][j])
                left = c if j == 0 else max(0, c - grid[i][j - 1])
                right = c if j == cols - 1 else max(0, c - grid[i][j + 1])
                surface = surface + front + back + left + right + 2

        return surface
