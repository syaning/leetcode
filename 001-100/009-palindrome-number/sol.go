package main

func isPalindrome(x int) bool {
	if x < 0 {
		return false
	}

	copyed, reversed := x, 0

	for copyed > 0 {
		reversed = reversed*10 + copyed%10
		copyed = copyed / 10
	}

	return x == reversed
}
