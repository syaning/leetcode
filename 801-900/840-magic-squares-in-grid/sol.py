class Solution:

    def numMagicSquaresInside(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
        rows = len(grid)
        cols = len(grid[0])

        if rows < 3 or cols < 3:
            return 0

        count = 0

        for i in range(rows - 2):
            for j in range(cols - 2):
                subgrid = [row[j:j + 3] for row in grid[i:i + 3]]

                if subgrid[1][1] != 5:
                    continue

                num_match = set([x for row in subgrid for x in row]) == set(
                    range(1, 10))
                if not num_match:
                    continue

                row_sums = [sum(row) for row in subgrid]
                col_sums = [sum([subgrid[r][c] for r in range(3)])
                            for c in range(3)]
                sum_d1 = subgrid[0][0] + subgrid[1][1] + subgrid[2][2]
                sum_d2 = subgrid[0][2] + subgrid[1][1] + subgrid[2][0]

                if len(set(row_sums + col_sums + [sum_d1, sum_d2])) == 1:
                    count += 1

        return count
