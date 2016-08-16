package main

import "math"

func lengthOfLongestSubstring(s string) int {
	lookup := make(map[uint8]int)
	answer := 0

	for i, j := 0, 0; j < len(s); j++ {
		ch := s[j]
		_, ok := lookup[ch]

		if ok {
			i = int(math.Max(float64(lookup[ch]), float64(i)))
		}

		answer = int(math.Max(float64(answer), float64(j-i+1)))
		lookup[ch] = j + 1
	}

	return answer
}
