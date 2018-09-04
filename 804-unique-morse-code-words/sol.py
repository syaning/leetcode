class Solution:

    def uniqueMorseRepresentations(self, words):
        """
        :type words: List[str]
        :rtype: int
        """
        morse = [
            '.-', '-...', '-.-.', '-..', '.', '..-.', '--.',
            '....', '..', '.---', '-.-', '.-..', '--', '-.',
            '---', '.--.', '--.-', '.-.', '...', '-',
            '..-', '...-', '.--', '-..-', '-.--', '--..'
        ]
        codes = []

        for w in words:
            code = ''.join([morse[ord(l) - 97] for l in w])
            codes.append(code)

        return len(set(codes))
