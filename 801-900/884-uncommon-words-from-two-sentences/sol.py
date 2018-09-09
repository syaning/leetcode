class Solution:

    def uncommonFromSentences(self, A, B):
        """
        :type A: str
        :type B: str
        :rtype: List[str]
        """
        counter = {}
        for w in A.split() + B.split():
            counter[w] = counter.get(w, 0) + 1
        return [w for w in counter if counter[w] == 1]
