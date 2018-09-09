class Solution:

    def subdomainVisits(self, cpdomains):
        """
        :type cpdomains: List[str]
        :rtype: List[str]
        """
        data = {}
        for cpdomain in cpdomains:
            count, domain = cpdomain.split(' ')
            domain = domain.split('.')[::-1]
            key = ''
            for seg in domain:
                key = seg if not key else (seg + '.' + key)
                data[key] = data.get(key, 0) + int(count)

        return ['%d %s' % (v, k) for k, v in data.items()]
