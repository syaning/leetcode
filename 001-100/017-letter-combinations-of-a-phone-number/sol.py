from functools import reduce


class Solution(object):

    def letterCombinations(self, digits):
        """
        :type digits: str
        :rtype: List[str]
        """
        table = [
            [],
            [],
            ['a', 'b', 'c'],
            ['d', 'e', 'f'],
            ['g', 'h', 'i'],
            ['j', 'k', 'l'],
            ['m', 'n', 'o'],
            ['p', 'q', 'r', 's'],
            ['t', 'u', 'v'],
            ['w', 'x', 'y', 'z']
        ]
        letters = [table[int(num)] for num in list(digits)]

        def combine(l1, l2):
            if not l1:
                return l2
            if not l2:
                return l1
            result = []
            for a in l1:
                for b in l2:
                    result.append(a + b)
            return result

        return reduce(combine, letters, [])
