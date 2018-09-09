package main

func maxArea(height []int) int {
	result := 0
	left, right := 0, len(height)-1

	for left < right {
		area := min(height[left], height[right]) * (right - left)
		result = max(result, area)

		if height[left] < height[right] {
			i := left
			for i < right && height[i] <= height[left] {
				i++
			}
			left = i
		} else {
			i := right
			for i > left && height[i] <= height[right] {
				i--
			}
			right = i
		}
	}

	return result
}

func max(x int, y int) int {
	if x >= y {
		return x
	}
	return y
}

func min(x int, y int) int {
	if x <= y {
		return x
	}
	return y
}
