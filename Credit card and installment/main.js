//EXERCISE 9: Given different credit cards, show on the console the amount of installments without interest according to the following criteria.
//Mastercard - up to 6 installments on interest
//Visa - up to 9 installments without interest
//Amex - up to 3 installments without interest
//All others - 1 installment without interest

let card = ['mastercard', 'visa', 'amex'];

if (card == 'mastercard') {
    console.log('tiene 9 installments without interest');
} else if (card == 'visa') {
    console.log('tiene 6 installments without interest');
} else if (card == 'amex') {
    console.log('tiene 3 installments without interest');
} else {
    console.log('tiene 1 installments without interest');
}
