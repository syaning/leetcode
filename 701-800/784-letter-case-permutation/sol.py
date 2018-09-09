class Solution:

    def letterCasePermutation(self, S):
        """
        :type S: str
        :rtype: List[str]
        """
        result = ['']
        for c in S:
            if c.isalpha():
                result = [p + c.lower() for p in result] + \
                    [p + c.upper() for p in result]
            else:
                result = [p + c for p in result]
        return result
