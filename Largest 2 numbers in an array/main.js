//EXERCISE: Create a function that returns the 2 largest number within an array

const arr = [3,5,1,10,23,13] // 23,13 // 

let array = [3, 5, 1, 10, 23, 13]

function maxNum(array) {
    array.sort(function (a, b) { return b - a });
    console.log(array[0] + ", " + array[1])
}

maxNum([40, 1, 5, 25, 10])