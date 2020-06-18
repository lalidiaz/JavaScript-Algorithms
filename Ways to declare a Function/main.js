//WAYS TO DECLARE A FUNCTION

function doctorize(firstName) {
    return `Dr ${firstName}`;
}

//Anonymous function 

function (firstName) {
    return `Dr ${firstName}`;
}

//Function expression : Is where you store a function as a value in a variable.
const doctorize = function (firstName) {
    return `Dr ${firstName}`;
};

// The difference between using one type of function or the other is the Hoisting.
//JavaScript does not hoist variable functions but it does it with declarations of variables.  

function doctorize2(firstName) {
    return `Dr ${firstName}`;
};


function inchToCM(inches) {
    return cm = inches * 2.54;
}

const inchToCM = function (inches) {
    return cm = inches * 2.54;
}


//Arrow function--> It offers a concise sintax, don't have it owns scope in reference with THIS keyword.
//Arrow function are anonymous functions = always have to declare and stick it into a variable.

const inchToCM = (inches) => {
    return cm = inches * 2.54;
}

//explicit: return with keyword "return".
//implicit return = without type keyword return.

const inchToCM = (inches) => inches * 2.54;

function add(a, b = 3) {
    const total = a + b;
    return total;
}

//Arrow 

const add = (a, b = 3) => a + b;

//Function Returning an Object

function makeCake(first, last) {

    const cake = {
        flavour: `${first} ${last}`,
        cookingTime: 0
    }
    return cake
}

//Same example as ARROW 
const makeCake = (first, last) => ({ Flavour: `${first} ${last}`, cookingTime: 0 });

// IIFE: another anonymous function. (Inmediately Invoked Function Expression)

function (age) {
    return `You are fine${age}`;
}) (10);  // 10 is the age 
