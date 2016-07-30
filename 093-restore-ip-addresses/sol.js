/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  var result = []
  buildIp(s, [], result)
  return result
}

function buildIp(s, nums, result) {
  if (nums.length === 4) {
    if (!s) {
      result.push(nums.join('.'))
    }
    return
  }

  for (let i = 0; i < 3; i++) {
    if (i >= s.length) {
      return
    }

    if (i > 0 && s[0] === '0') {
      return
    }

    let num = +s.substring(0, i + 1)
    if (num <= 255) {
      buildIp(s.substring(i + 1), nums.concat([num]), result)
    }
  }
}
