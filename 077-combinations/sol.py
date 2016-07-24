class Solution(object):

    def combine(self, n, k):
        """
        :type n: int
        :type k: int
        :rtype: List[List[int]]
        """
        result = []
        self.helper(n, k, 1, [], result)
        return result

    def helper(self, n, k, m, nums, result):
        if len(nums) == k:
            result.append(nums[:])
            return
        for i in range(m, n + 1):
            nums.append(i)
            self.helper(n, k, i + 1, nums, result)
            nums.pop()
