class Solution:

    def isMonotonic(self, A):
        """
        :type A: List[int]
        :rtype: bool
        """
        temp = A[0]
        asc = None
        for i in A:
            if i == temp:
                continue
            elif asc is None:
                asc = i > temp
            else:
                if (i > temp) != asc:
                    return False
            temp = i

        return True
