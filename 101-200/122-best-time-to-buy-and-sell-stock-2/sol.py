class Solution(object):

    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        if not prices:
            return 0

        buy = prices[0]
        prev = buy
        profit = 0

        for price in prices:
            if price > prev:
                prev = price
            else:
                profit += prev - buy
                prev = buy = price

        profit += prev - buy

        return profit
