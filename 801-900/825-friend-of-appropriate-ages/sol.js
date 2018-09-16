/**
 * @param {number[]} ages
 * @return {number}
 */
var numFriendRequests = function(ages) {
  const numInAge = new Array(121).fill(0)
  for (let age of ages) {
    numInAge[age]++
  }

  const sumInAge = new Array(121).fill(0)
  for (let i = 1; i < 121; i++) {
    sumInAge[i] = numInAge[i] + sumInAge[i - 1]
  }

  let res = 0
  for (let i = 15; i < 121; i++) {
    if (numInAge[i] === 0) {
      continue
    }
    const count = sumInAge[i] - sumInAge[(i / 2 >> 0) + 7]
    res += count * numInAge[i] - numInAge[i]
  }

  return res
}
