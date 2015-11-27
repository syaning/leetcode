class Solution(object):
    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        if not nums or len(nums) == 0:
            return 0

        prev, current = 0, 1
        while current < len(nums):
            if nums[prev] != nums[current]:
                prev += 1
                nums[prev] = nums[current]
            current += 1

        return prev + 1
