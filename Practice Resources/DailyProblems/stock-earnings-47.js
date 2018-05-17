const maxStockEarnings = stocks => {
  const priceDiffs = [];
  let sum = best = 0;
  for (let i = 1; i < stocks.length; i++) {
    priceDiffs.push(stocks[i] - stocks[i-1]);
  }

  for (let i = 0; i < priceDiffs.length; i++) {
    sum = Math.max(priceDiffs[i], sum + priceDiffs[i]);
    best = Math.max(sum, best);
  }

  return best;
}