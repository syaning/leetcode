func twoSum(nums []int, target int) []int {
	lookup := make(map[int]int)

	for i := 0; i < len(nums); i++ {
		num := nums[i]
		idx, present := lookup[target-num]

		if present {
			return []int{idx, i}
		}

		lookup[num] = i
	}

	return []int{-1, -1}
}
