func maxProfit(prices []int) int {
	if len(prices) == 0 {
		return 0
	}

	buy := prices[0]
	prev := buy
	profit := 0

	for _, price := range prices {
		if price > prev {
			prev = price
		} else {
			profit += prev - buy
			prev, buy = price, price
		}
	}

	profit += prev - buy
	return profit
}
