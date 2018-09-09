class Solution(object):

    def maxSubArray(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        newSum = maxSum = nums[0]
        for n in nums[1:]:
            newSum = max(newSum + n, n)
            maxSum = max(maxSum, newSum)
        return maxSum
