class Solution(object):

    def plusOne(self, digits):
        """
        :type digits: List[int]
        :rtype: List[int]
        """
        digits[- 1] += 1
        for i in reversed(range(len(digits))):
            if digits[i] >= 10:
                digits[i] -= 10
                if i == 0:
                    digits = [1] + digits
                else:
                    digits[i - 1] += 1
            else:
                return digits
        return digits
