//Fuction as an argument 

function doctorize(name) {
    return `Dr. ${name}`
};

doctorize('Lali');

function yell(name) {
    return `HEY ${name.toUpperCase()}`
}

yell('Lali');

yell(doctorize(Lali))

function yell(name = 'Fernando') {
    return `HEY ${name.toUpperCase()}`
}
yell();
