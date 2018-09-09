class Solution(object):

    def permuteUnique(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        if len(nums) == 1:
            return [nums]
        lookup = set()
        result = []
        for i in range(len(nums)):
            if nums[i] in lookup:
                continue
            lookup.add(nums[i])
            for j in self.permuteUnique(nums[:i] + nums[i + 1:]):
                result.append([nums[i]] + j)
        return result
