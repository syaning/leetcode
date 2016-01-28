from collections import defaultdict


class Solution(object):

    def getHint(self, secret, guess):
        """
        :type secret: str
        :type guess: str
        :rtype: str
        """
        a, b = 0, 0
        smap, gmap = defaultdict(int), defaultdict(int)
        for s, g in zip(secret, guess):
            if s == g:
                a += 1
            else:
                if smap[g]:
                    smap[g] -= 1
                    b += 1
                else:
                    gmap[g] += 1

                if gmap[s]:
                    gmap[s] -= 1
                    b += 1
                else:
                    smap[s] += 1

        return '%dA%dB' % (a, b)
