class Solution(object):

    def restoreIpAddresses(self, s):
        """
        :type s: str
        :rtype: List[str]
        """
        result = []
        self.buildIp(s, [], result)
        return result

    def buildIp(self, s, nums, result):
        if len(nums) == 4:
            if not s:
                result.append('.'.join(nums))
            return

        for i in range(3):
            if i >= len(s):
                return
            if i > 0 and s[0] == '0':
                return
            if int(s[:i + 1]) <= 255:
                self.buildIp(s[i + 1:], nums + [s[:i + 1]], result)
