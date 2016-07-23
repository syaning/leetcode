from functools import reduce


class Solution(object):

    def fullJustify(self, words, maxWidth):
        """
        :type words: List[str]
        :type maxWidth: int
        :rtype: List[str]
        """
        result = []
        current = []
        curlen = 0

        for word in words:
            if curlen + len(word) <= maxWidth:
                current.append(word)
                curlen += len(word) + 1
            else:
                result.append(self.adjust(current, maxWidth))
                current = [word]
                curlen = len(word) + 1

        last = ' '.join(current)
        pads = maxWidth - len(last)
        for i in range(pads):
            last += ' '
        result.append(last)

        return result

    def adjust(self, words, maxWidth):
        width = reduce(lambda a, b: a + len(b), words, 0)
        pads = maxWidth - width

        if len(words) == 1:
            for i in range(pads):
                words.append(' ')
            return ''.join(words)

        avg, mod = divmod(pads, len(words) - 1)
        result = []

        for i in range(len(words)-1):
            result.append(words[i])
            if i < mod:
                result.append(' ')
            for j in range(avg):
                result.append(' ')
        result.append(words[-1])

        return ''.join(result)
