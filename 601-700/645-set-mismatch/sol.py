class Solution:

    def findErrorNums(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        m = {i: True for i in range(1, len(nums) + 1)}
        dup = None
        lost = None
        for n in nums:
            if n in m:
                del m[n]
            else:
                dup = n

        lost = list(m.keys())[0]
        return [dup, lost]

    def findErrorNums2(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        n = len(nums)
        a = sum(nums) - n * (n + 1) / 2
        b = (sum([i**2 for i in nums]) -
             sum([i**2 for i in range(1, n + 1)])) / a
        return [int((a + b) / 2), int((b - a) / 2)]
