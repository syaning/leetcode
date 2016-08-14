func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {
	m, n := len(nums1), len(nums2)
	mid := (m + n) / 2
	i, j := 0, 0
	prev, next := 0, 0

	for i+j <= mid {
		prev = next

		if i >= m {
			next = nums2[j]
			j++
		} else if j >= n {
			next = nums1[i]
			i++
		} else if nums1[i] < nums2[j] {
			next = nums1[i]
			i++
		} else {
			next = nums2[j]
			j++
		}
	}

	if (m+n)%2 == 0 {
		return float64(prev+next) / 2
	} else {
		return float64(next)
	}
}
