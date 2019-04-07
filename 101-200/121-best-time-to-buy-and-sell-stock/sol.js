/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
    if (!prices.length) {
        return 0
    }

    let buy = prices[0]
    let profit = 0

    for (let price of prices) {
        if (price < buy) {
            buy = price
        } else if (price - buy > profit) {
            profit = price - buy
        }
    }

    return profit
}
