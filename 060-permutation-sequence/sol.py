class Solution(object):

    def getPermutation(self, n, k):
        """
        :type n: int
        :type k: int
        :rtype: str
        """
        fac = [1]
        for i in range(1, n + 1):
            fac.append(fac[-1] * i)

        chs = [str(i) for i in range(1, n + 1)]
        result = []
        for i in range(n):
            index = (k - 1) // fac[n - i - 1]
            result.append(chs.pop(index))
            k = (k - 1) % fac[n - i - 1] + 1

        return ''.join(result)
