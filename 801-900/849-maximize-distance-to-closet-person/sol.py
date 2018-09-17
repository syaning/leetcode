class Solution:

    def maxDistToClosest(self, seats):
        """
        :type seats: List[int]
        :rtype: int
        """
        n = len(seats)
        l = 0
        r = n - 1

        while seats[l] == 0:
            l += 1
        while seats[r] == 0:
            r -= 1

        count = 0
        maxlen = 0

        for i in seats[l:r]:
            if i == 1:
                count = 0
            else:
                count += 1
                maxlen = max(count, maxlen)

        return max((maxlen + 1) // 2, l, n - r - 1)
