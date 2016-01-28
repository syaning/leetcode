class Solution(object):
    def wordPattern(self, pattern, str):
        """
        :type pattern: str
        :type str: str
        :rtype: bool
        """
        str = str.split()
        if len(pattern) != len(str):
            return False

        kv, vk = {}, {}
        for k, v in zip(pattern, str):
            if k not in kv and v not in vk:
                kv[k], vk[v] = v, k
            elif k not in kv or v not in vk:
                return False

        return True
