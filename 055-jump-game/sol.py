class Solution(object):

    def canJump(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        reach = 0
        i = 0
        while i <= reach:
            reach = max(reach, nums[i] + i)
            if reach >= len(nums) - 1:
                return True
            i += 1
        return False
