//DECLARE METHODS

//METHODS : is a function that lives inside of an object. One way to declare a method, just create a property on your object and set it into a function.
//console is an object.

const lali = {
    name: 'Lali Diaz',
    sayHi: function () {
        console.log('hey, Lali');
        return 'Hey Lali',
    }
}

lali.sayHi();

//SHORT HAND METHOD: I will create a property called "yellHi" set to a function called "yellHi".
//Run methods inside of an object

yellHi() {
    console.log("Im yelling hi!");
};

//Arrow function that takes no arguments, they take the parent scope.

wisperHi: () => {
    console.log("Hi, I am a mouse");
}

lali.sayHi();
