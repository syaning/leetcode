func getRow(rowIndex int) []int {
	prev := []int{}
	result := []int{1}

	for i := 1; i <= rowIndex; i++ {
		prev = result
		result = []int{}

		for j := 0; j < i+1; j++ {
			if j == 0 || j == i {
				result = append(result, 1)
			} else {
				result = append(result, prev[j-1]+prev[j])
			}
		}
	}

	return result
}
