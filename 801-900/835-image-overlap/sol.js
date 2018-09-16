function maxOverlap(A, B) {
  const rows = A.length
  const cols = A[0].length
  let max_overlap = 0

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const A_overlap = A.slice(i).map(r => r.slice(j))
      const B_overlap = B.slice(0, rows - i).map(r => r.slice(0, cols - j))

      let overlap = 0
      for (let x = 0; x < A_overlap.length; x++) {
        for (let y = 0; y < A_overlap[0].length; y++) {
          overlap += (A_overlap[x][y] & B_overlap[x][y])
        }
      }

      if (overlap > max_overlap) {
        max_overlap = overlap
      }
    }
  }

  return max_overlap
}

/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number}
 */
var largestOverlap = function(A, B) {
  return Math.max(maxOverlap(A, B), maxOverlap(B, A))
}
