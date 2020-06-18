//EXERCISE 1: Calculate bill + tip + fall in the default value.

function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.5) {

    console.log('running calculate bill');
    const total = billAmount + billAmount * taxRate + billAmount * tipRate;
    return total;
};

calculateBill(100);


// If I want to use the default taxRate but not the default tipRate:

const myBill4 = calculateBill(100, undefined, 0.2);
console.log(myBill4);
