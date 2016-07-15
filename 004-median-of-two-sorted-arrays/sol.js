/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  var m = nums1.length
  var n = nums2.length
  var mid = (m + n) / 2
  var i = 0
  var j = 0
  var prev = 0
  var next = 0

  while ((i + j) <= mid) {
    prev = next
    if (i >= m) {
      next = nums2[j++]
    } else if (j >= n) {
      next = nums1[i++]
    } else if (nums1[i] < nums2[j]) {
      next = nums1[i++]
    } else {
      next = nums2[j++]
    }
  }

  return (m + n) % 2 === 0 ? (prev + next) / 2 : next
}
