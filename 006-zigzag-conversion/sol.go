package main

import "strings"

func convert(s string, numRows int) string {
	if numRows <= 1 {
		return s
	}

	result := []string{}
	size := 2*numRows - 2

	for i := 0; i < numRows; i++ {
		for j := i; j < len(s); j += size {
			result = append(result, string(s[j]))
			if i != 0 && i != numRows-1 && j+size-2*i < len(s) {
				result = append(result, string(s[j+size-2*i]))
			}
		}
	}

	return strings.Join(result, "")
}
