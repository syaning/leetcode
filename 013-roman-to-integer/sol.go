package main

func romanToInt(s string) int {
	vals := []int{1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1}
	symbols := []string{"M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"}
	result := 0

	for i := 0; len(s) > 0; i++ {
		symLen := len(symbols[i])

		for len(s) >= symLen {
			if s[:symLen] == symbols[i] {
				result += vals[i]
				s = s[symLen:]
			} else {
				break
			}
		}
	}

	return result
}
