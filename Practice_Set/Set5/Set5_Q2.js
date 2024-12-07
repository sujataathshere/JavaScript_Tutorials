let prices = [250, 645, 300, 900, 50];
// Printing prices
console.log(prices);
for(let idx=0; idx<prices.length; idx++){
    let offer = prices[idx]/10; // Calculate the offer
    prices[idx] -= offer; // Change the array values
}
// Printing prices after applying 10% off on each
console.log("After applying offer")
console.log(prices);