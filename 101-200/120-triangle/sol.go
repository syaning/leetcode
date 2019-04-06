func minimumTotal(triangle [][]int) int {
	prev := []int{}
	result := triangle[0]

	for i := 1; i < len(triangle); i++ {
		prev = result
		result = []int{}
		row := triangle[i]

		for j := 0; j <= i; j++ {
			if j == 0 || (j < i && prev[j-1] > prev[j]) {
				result = append(result, prev[j]+row[j])
			} else {
				result = append(result, prev[j-1]+row[j])
			}
		}
	}

	min := result[0]
	for _, val := range result {
		if val < min {
			min = val
		}
	}
	return min
}
