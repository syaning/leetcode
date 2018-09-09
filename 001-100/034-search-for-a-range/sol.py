class Solution(object):

    def searchRange(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        return self.search(nums, target, 0, len(nums) - 1)

    def search(self, nums, target, l, r):
        if l > r:
            return [-1, -1]
        m = (l + r) // 2
        if nums[m] < target:
            return self.search(nums, target, m + 1, r)
        elif nums[m] > target:
            return self.search(nums, target, l, m - 1)
        else:
            left = self.search(nums, target, l, m - 1)
            right = self.search(nums, target, m + 1, r)
            return [
                m if left[0] == -1 else left[0],
                m if right[1] == -1 else right[1]
            ]
