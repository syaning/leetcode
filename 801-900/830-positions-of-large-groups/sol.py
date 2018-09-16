class Solution:

    def largeGroupPositions(self, S):
        """
        :type S: str
        :rtype: List[List[int]]
        """
        pos = []
        current = ''
        length = 0
        start = 0

        for i, l in enumerate(S):
            if l == current:
                length += 1
            else:
                if length >= 3:
                    pos.append([start, i - 1])
                current = l
                length = 1
                start = i

        if length >= 3:
            pos.append([start, i])

        return pos
