class Solution(object):

    def jump(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        result = 0
        current, last = 0, 0
        for i in range(len(nums)):
            if i > last:
                last = current
                result += 1
            current = max(current, nums[i] + i)
        return result
