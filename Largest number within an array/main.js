//Create a function that returns the largest number within an array

const arr = [3,5,1,10,23,13] // 23 //

var arr = [3, 5, 1, 10, 23, 13]

function getMaxNumOf(arr) {
    return Math.max.apply(null, arr);
}

getMaxNumOf(arr)
