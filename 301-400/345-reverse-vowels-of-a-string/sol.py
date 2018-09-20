class Solution:

    def reverseVowels(self, s):
        """
        :type s: str
        :rtype: str
        """
        vowels = 'aeiouAEIOU'
        l = 0
        r = len(s) - 1
        cs = list(s)

        while l < r:
            if cs[l] in vowels and cs[r] in vowels:
                cs[l], cs[r] = cs[r], cs[l]
                l += 1
                r -= 1
            elif s[l] in vowels:
                r -= 1
            else:
                l += 1

        return ''.join(cs)
