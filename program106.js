function bestByAndSell(sellValues) {
    let minStockPurchasePrice = sellValues[0] || 0;
    let profit = 0;
    for (let i = 0; i < sellValues.length; i++) {
        if (sellValues[i] < minStockPurchasePrice) {
            minStockPurchasePrice = sellValues[i];
        }
        let currentProfit = sellValues[i] - minStockPurchasePrice;
        profit = Math.max(profit, currentProfit);
    }
    return profit;
}

console.log(bestByAndSell([10, 7, 5, 8, 11, 9]));