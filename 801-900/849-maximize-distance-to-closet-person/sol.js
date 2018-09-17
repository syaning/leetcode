/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
  const n = seats.length
  let l = 0
  let r = n - 1

  while (seats[l] == 0) {
    l++
  }
  while (seats[r] == 0) {
    r--
  }

  let count = 0
  let maxlen = 0

  for (let i of seats.slice(l, r)) {
    if (i == 1) {
      count = 0
    } else {
      count++
      maxlen = Math.max(count, maxlen)
    }
  }

  return Math.max((maxlen + 1) / 2 >> 0, l, n - r - 1)
}
