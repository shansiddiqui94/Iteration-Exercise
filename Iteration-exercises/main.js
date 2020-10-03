//Exercise #1
//Using map, write a function that takes an array of numbers
//and makes them strings


let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function ToStrings(arr) {
    let arrOfStrings = arr.map(String);
    return arrOfStrings;
}
console.log(convertToStrings(num));


//Exercise #2
//You must use forEach for this exercise
//Write a function that accepts an array and returns a new array
//with all the values in the array passed to the function doubled

function doubled(arr) {
    let newArray = [];
    arr.forEach(index => {
        let doubled = index * 2;
        newArr.push(doubled)
        ''
    })
    return newArr;
}

//Exercise #3
//Write a function called firstAndLast which accepts
//an array of strings and returns a new array with
//only the first and last character of each string
//Example: ['winning', 'tomato'] => ['wg', 'to']
//hint: forEach show be used here

function showFirstAndLast(arr) {
    let newArr = [];
    arr.forEach(function(value) {
        if (typeof value === "string") {
            newArr.push(value[0] + value[value.length - 1]);
        }
    });
    return newArr;
}
console.log(showFirstAndLast(["winning", "food"]))

//Bonus:
//Write a for loop that outputs this:
// 1 1 1 2 2 2 3 3 3 4 4 4