// Function Definition

function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  // this is the function body
  console.log('Running Calculate Bill!');
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total;
}

// function call or run
const myTotal = calculateBill(100);
