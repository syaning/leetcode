package main

func lengthOfLongestSubstring(s string) int {
	lookup := make(map[uint8]int)
	answer := 0

	for i, j := 0, 0; j < len(s); j++ {
		ch := s[j]
		_, ok := lookup[ch]

		if ok {
			i = max(lookup[ch], i)
		}

		answer = max(answer, j-i+1)
		lookup[ch] = j + 1
	}

	return answer
}

func max(x int, y int) int {
	if x >= y {
		return x
	}
	return y
}
