func numDistinct(s string, t string) int {
	dp := [][]int{}

	for i := 0; i <= len(t); i++ {
		row := []int{}
		for j := 0; j <= len(s); j++ {
			if i == 0 {
				row = append(row, 1)
			} else {
				row = append(row, 0)
			}
		}

		dp = append(dp, row)
	}

	for i := 1; i <= len(t); i++ {
		for j := 1; j <= len(s); j++ {
			dp[i][j] = dp[i][j-1]
			if t[i-1] == s[j-1] {
				dp[i][j] += dp[i-1][j-1]
			}
		}
	}

	return dp[len(t)][len(s)]
}
