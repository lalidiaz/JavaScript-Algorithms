//EXERCISE: Greeting

const name = "Laura";

function sayHiTo(name) {
    return `hello ${name}`;
}

const greeting = sayHiTo('Lali');

console.log(greeting);

//EXERCISE 3: Calculate total

function calculateBill(billAmount, taxRate) {
    //this is the function body

console.log('running calculate bill');

//this variable is only available inside the function 
const total = billAmount * 1 + taxRate;
return total;

};

// Function call or run 
const laliTotal = 400;
const laliTaxRate = 0.30;
const myTotal1 = calculateBill(laliTotal, laliTaxRate);


console.log(laliTotal, laliTaxRate);

