class Solution:

    def numberOfLines(self, widths, S):
        """
        :type widths: List[int]
        :type S: str
        :rtype: List[int]
        """
        lines = 0
        units = 0

        for l in S:
            width = widths[ord(l) - 97]
            if units + width > 100:
                lines += 1
                units = width
            else:
                units += width

        return [lines + 1, units]
