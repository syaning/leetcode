class Solution(object):

    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        if not nums:
            return 0
        first = second = 0
        for num in nums[1:]:
            if num != nums[second]:
                second += 1
                first = second
                nums[second] = num
            elif first == second:
                second += 1
                nums[second] = num
        return second + 1
