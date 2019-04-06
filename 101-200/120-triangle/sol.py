class Solution(object):

    def minimumTotal(self, triangle):
        """
        :type triangle: List[List[int]]
        :rtype: int
        """
        prev, result = [], triangle[0]

        for i in range(1, len(triangle)):
            prev, result = result, []
            row = triangle[i]

            for j in range(i + 1):
                if j == 0 or (j < i and prev[j - 1] > prev[j]):
                    result.append(prev[j] + row[j])
                else:
                    result.append(prev[j - 1] + row[j])

        return min(result)
