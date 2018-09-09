class Solution:

    def search(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        return self.search_in_range(nums, 0, len(nums) - 1, target)

    def search_in_range(self, nums, start, end, target):
        if start == end:
            return start if nums[start] == target else -1

        mid = (start + end) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            return self.search_in_range(nums, mid + 1, end, target)
        else:
            return self.search_in_range(nums, start, mid, target)
