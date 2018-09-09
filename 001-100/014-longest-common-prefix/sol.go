package main

func longestCommonPrefix(strs []string) string {
	if len(strs) == 0 {
		return ""
	}

	i := 1
	prefix := ""

	for i <= len(strs[0]) {
		prefix = strs[0][:i]
		commonPrefix := true

		for i := 0; i < len(strs) && commonPrefix; i++ {
			if len(prefix) > len(strs[i]) {
				commonPrefix = false
			} else {
				commonPrefix = prefix == strs[i][:len(prefix)]
			}
		}

		if commonPrefix {
			i++
		} else {
			return prefix[:len(prefix)-1]
		}
	}

	return prefix
}
