import math


class Solution:

    def numRabbits(self, answers):
        """
        :type answers: List[int]
        :rtype: int
        """
        counts = {}
        for answer in answers:
            counts[answer] = counts.get(answer, 0) + 1

        total = 0
        for answer, count in counts.items():
            total += math.ceil(count / (answer + 1)) * (answer + 1)

        return total
