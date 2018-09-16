class Solution:

    def numFriendRequests(self, ages):
        """
        :type ages: List[int]
        :rtype: int
        """
        num_in_age = [0] * 121
        for age in ages:
            num_in_age[age] += 1

        sum_in_age = [0] * 121
        for i in range(1, 121):
            sum_in_age[i] = num_in_age[i] + sum_in_age[i - 1]

        res = 0
        for i in range(15, 121):
            if num_in_age[i] == 0:
                continue
            count = sum_in_age[i] - sum_in_age[i // 2 + 7]
            res += count * num_in_age[i] - num_in_age[i]

        return res
