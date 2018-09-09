package main

func reverse(x int) int {
	if x < 0 {
		return -reverse(-x)
	}

	val := 0
	for x > 0 {
		val = val*10 + x%10
		x = x / 10
	}

	if val <= 2147483647 {
		return val
	}

	return 0
}
