class Solution(object):

    def subsets(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        result = [[]]
        for i in range(len(nums)):
            size = len(result)
            for j in range(size):
                result.append(result[j] + [nums[i]])
        return result
