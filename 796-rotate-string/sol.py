class Solution:

    def rotateString(self, A, B):
        """
        :type A: str
        :type B: str
        :rtype: bool
        """
        if len(A) != len(B):
            return False

        if not A:
            return True

        for i in range(len(A)):
            if A[i:] + A[0:i] == B:
                return True
        return False

    def rotateString2(self, A, B):
        """
        :type A: str
        :type B: str
        :rtype: bool
        """
        if len(A) != len(B):
            return False
        return B in (A + A)
