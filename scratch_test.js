const fs = require('fs');

const data = JSON.parse(fs.readFileSync('saleJun26.json', 'utf8'));

let activeSalesCount = 0;
let grandSaleTotalNetLAK = 0;
let grandSaleTotalGrossLAK = 0;
let originalCostLAK = 0;
let correctedCostLAK = 0;
let correctedCount = 0;

data.filter(sale => sale.isActive === true).forEach(sale => {
  activeSalesCount++;
  
  const saleRate = sale.exchangeRate || 1;
  const netAmount = sale.total * saleRate;
  const grossAmount = (sale.total + (sale.discount || 0)) * saleRate;
  
  grandSaleTotalNetLAK += netAmount;
  grandSaleTotalGrossLAK += grossAmount;
  
  sale.lines?.forEach(line => {
    line.cards?.forEach(card => {
      let cardCost = 0;
      if (card.costLCY !== undefined && card.costLCY !== null) {
        cardCost = parseFloat(card.costLCY);
      } else {
        const rate = card.exchangeRate || 1;
        cardCost = parseFloat(card.cost || 0) * rate;
      }
      
      originalCostLAK += cardCost;
      
      // Let's apply our smart correction logic
      const sellingPrice = parseFloat(line.product?.pro_price || 0);
      const cardRate = card.exchangeRate || 1;
      
      // If the calculated cost is greater than 1.5x the retail selling price of the item,
      // and a non-LAK exchange rate was applied, this is a database entry error.
      // We fall back to the raw cost value (which was entered in LAK but incorrectly multiplied).
      if (sellingPrice > 0 && cardCost > sellingPrice * 1.5 && cardRate > 10) {
        correctedCount++;
        correctedCostLAK += parseFloat(card.cost || 0);
      } else {
        correctedCostLAK += cardCost;
      }
    });
  });
});

console.log(`Active Sales Count: ${activeSalesCount}`);
console.log(`Grand Sale Total (Net LAK): ${grandSaleTotalNetLAK}`);
console.log(`Original Grand Sale Cost (LAK): ${originalCostLAK}`);
console.log(`Corrected Grand Sale Cost (LAK): ${correctedCostLAK}`);
console.log(`Corrected Cards Count: ${correctedCount}`);
console.log(`Corrected Profit Margin: ${((grandSaleTotalNetLAK - correctedCostLAK) / grandSaleTotalNetLAK * 100).toFixed(2)}%`);
