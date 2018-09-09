class Solution(object):

    def uniquePathsWithObstacles(self, obstacleGrid):
        """
        :type obstacleGrid: List[List[int]]
        :rtype: int
        """
        m = obstacleGrid
        for i in range(len(m)):
            for j in range(len(m[i])):
                if i == 0 and j == 0:
                    m[i][j] = 1 - m[i][j]
                elif i == 0:
                    m[i][j] = 0 if m[i][j] == 1 else m[i][j - 1]
                elif j == 0:
                    m[i][j] = 0 if m[i][j] == 1 else m[i - 1][j]
                else:
                    m[i][j] = 0 if m[i][j] == 1 else m[i][j - 1] + m[i - 1][j]
        return m[-1][-1]
