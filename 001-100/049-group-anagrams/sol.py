class Solution(object):

    def groupAnagrams(self, strs):
        """
        :type strs: List[str]
        :rtype: List[List[str]]
        """
        lookup = {}
        for word in strs:
            key = ''.join(sorted(word))
            if key in lookup:
                lookup[key].append(word)
            else:
                lookup[key] = [word]
        return list(lookup.values())
