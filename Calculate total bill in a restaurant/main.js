//EXERCISE : Calculate total bill in a restaurant 

function calculateBill() {
    //this is the function body
console.log('running calculate bill');
//this variable is only available inside the function 
const total = 100 * 1.13;
return total;
};

// Run of the function
const myTotal = calculateBill();
console.log(`Your total is $${myTotal}`);