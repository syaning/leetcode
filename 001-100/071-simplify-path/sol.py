class Solution(object):

    def simplifyPath(self, path):
        """
        :type path: str
        :rtype: str
        """
        path = path[1:].split('/')
        result = []
        for p in path:
            if not p or p == '.':
                continue
            elif p == '..':
                if len(result):
                    result.pop()
            else:
                result.append(p)
        return '/' + '/'.join(result)
