class Solution:

    def maxOverlap(self, A, B):
        """
        :type A: List[List[int]]
        :type B: List[List[int]]
        :rtype: int
        """
        rows = len(A)
        cols = len(A[0])
        max_overlap = 0

        for i in range(rows):
            for j in range(cols):
                A_overlap = [row[j:] for row in A[i:]]
                B_overlap = [row[:cols - j] for row in B[:rows - i]]
                overlap = [A_overlap[x][y] and B_overlap[x][y] for x in range(
                    len(A_overlap)) for y in range(len(A_overlap[0]))]
                overlap = sum(overlap)

                if overlap > max_overlap:
                    max_overlap = overlap

        return max_overlap

    def largestOverlap(self, A, B):
        return max(self.maxOverlap(A, B), self.maxOverlap(B, A))
