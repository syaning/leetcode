class Solution:
    def canConstruct(self, ransomNote, magazine):
        """
        :type ransomNote: str
        :type magazine: str
        :rtype: bool
        """
        lookup = {}
        for c in magazine:
            lookup[c] = lookup.get(c, 0) + 1

        for c in ransomNote:
            if not lookup.get(c):
                return False
            lookup[c] -= 1
        return True

    def canConstruct2(self, ransomNote, magazine):
        """
        :type ransomNote: str
        :type magazine: str
        :rtype: bool
        """
        for c in set(ransomNote):
            if ransomNote.count(c) > magazine.count(c):
                return False
        return True

