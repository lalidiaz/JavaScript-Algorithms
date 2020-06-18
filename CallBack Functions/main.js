//CALLBACK FUNCTIONS: Something that will happend when something is done. 

//2 types:

//Click callback: in HTML (button class='click'), it would look like this <button class='click' >Click me!</button>

const button = document.querySelector('.click');
console.log(button)


function handleClick() {
    console.log('Great clicking!!')
}
button.addEventListener('click', handleClick);

//The other way: Passing an anonymous 

button.addEventListener('click', function () {
    console.log("Nice Job!");
});


//Timer callback
setTimeout(handleClick, 1000);

//also with 

setTimeout(function () {
    console.log('Done! Time to eat')
});

//As arrow function

setTimeout(() => {
    console.log('This is an arrow function!')
});