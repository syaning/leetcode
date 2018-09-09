class Solution(object):

    def maxArea(self, height):
        """
        :type height: List[int]
        :rtype: int
        """
        result = 0
        left, right = 0, len(height) - 1

        while left < right:
            area = min(height[left], height[right]) * (right - left)
            result = max(result, area)
            if height[left] < height[right]:
                i = left
                while i < right and height[i] <= height[left]:
                    i += 1
                left = i
            else:
                i = right
                while i > left and height[i] <= height[right]:
                    i -= 1
                right = i

        return result
