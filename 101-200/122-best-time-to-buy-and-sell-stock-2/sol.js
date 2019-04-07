/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
    if (!prices.length) {
        return 0
    }

    let buy = prices[0]
    let prev = buy
    let profit = 0

    for (let price of prices) {
        if (price > prev) {
            prev = price
        } else {
            profit += prev - buy
            prev = buy = price
        }
    }

    profit += prev - buy

    return profit
}
