func maxProfit(prices []int) int {
	if len(prices) == 0 {
		return 0
	}

	buy := prices[0]
	profit := 0

	for _, price := range prices {
		if price < buy {
			buy = price
		} else if price-buy > profit {
			profit = price - buy
		}
	}

	return profit
}
