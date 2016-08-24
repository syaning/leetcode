package main

import "math"

func myAtoi(str string) int {
	if len(str) == 0 {
		return 0
	}

	var result int32 = 0
	var sign int32 = 1
	i := 0

	for str[i] == ' ' {
		i++
	}

	if str[i] == '+' {
		i++
	} else if str[i] == '-' {
		sign = -1
		i++
	}

	for i < len(str) && str[i] >= '0' && str[i] <= '9' {
		num := int32(str[i] - '0')

		if result > (math.MaxInt32-num)/10 {
			if sign > 0 {
				return math.MaxInt32
			}
			return math.MinInt32
		}

		result = result*10 + num
		i++
	}

	return int(sign * result)
}
