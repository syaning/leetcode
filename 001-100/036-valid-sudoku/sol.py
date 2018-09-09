class Solution(object):

    def isValidSudoku(self, board):
        """
        :type board: List[List[str]]
        :rtype: bool
        """
        for i in range(9):
            if not self.valid([board[i][j] for j in range(9)]) or not self.valid([board[j][i] for j in range(9)]):
                return False

        for i in range(3):
            for j in range(3):
                if not self.valid([board[m][n] for n in range(3 * j, 3 * j + 3) for m in range(3 * i, 3 * i + 3)]):
                    return False

        return True

    def valid(self, nums):
        nums = filter(lambda x: x != '.', nums)
        return len(set(nums)) == len(nums)
