class Solution(object):

    def search(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        if not nums:
            return -1
        l, r = 0, len(nums) - 1
        while l <= r:
            m = (l + r) // 2
            if nums[m] == target:
                return m
            inLeft = nums[m] > nums[l] and target >= nums[l] and target < nums[m]
            notInRight = nums[m] < nums[l] and not(target <= nums[r] and target > nums[m])
            if inLeft or notInRight:
                r = m - 1
            else:
                l = m + 1
        return -1
