/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
  const map = {}
  cpdomains.forEach(cpdomain => {
    const [count, domain] = cpdomain.split(' ')
    domain.split('.').reduceRight((ret, seg) => {
      ret.unshift(seg)
      const key = ret.join('.')
      map[key] = (map[key] || 0) + Number(count)
      return ret
    }, [])
  })
  return Object.keys(map).map(key => `${map[key]} ${key}`)
}
