class Solution(object):

    def findMedianSortedArrays(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: float
        """
        m, n = len(nums1), len(nums2)
        mid = (m + n) / 2.0
        i, j = 0, 0
        prev, nxt = 0, 0

        while (i + j) <= mid:
            prev = nxt
            if i >= m:
                nxt = nums2[j]
                j += 1
            elif j >= n:
                nxt = nums1[i]
                i += 1
            elif nums1[i] < nums2[j]:
                nxt = nums1[i]
                i += 1
            else:
                nxt = nums2[j]
                j += 1

        return (prev + nxt) / 2.0 if (m + n) % 2 == 0 else nxt
