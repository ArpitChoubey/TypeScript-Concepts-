let numbers = [1, 2, 3, 4, 5];
let fruits = ["apple", "banana", "orange", "mango"];

console.log("Numbers array:", numbers);
console.log("Fruits array:", fruits);
// Length
console.log("Size of numbers array:", numbers.length);
console.log("Size of fruits array:", fruits.length);
// push()
numbers.push(6, 7);

console.log("After push():", numbers);

// pop()
fruits.pop();

let lastFruit = fruits.pop();

console.log("After pop():", fruits);
console.log("Removed fruit is:", lastFruit);

// shift()

let firstNumber = numbers.shift();

console.log("After shift():", numbers);
console.log("Removed number:", firstNumber);

// unshift()

fruits.unshift("kiwi", "pear");

console.log("After unshift():", fruits);

// concat()

numbers.concat([8, 9], [10]);

console.log("Concatenated array:", numbers);

// slice()

let extractedArray = fruits.slice(1, 3);

console.log("After slice():", extractedArray);

// splice()

let removedElements = fruits.splice(1, 2);

console.log("After splice():", fruits);
console.log("Removed Elements:", removedElements);

fruits.splice(1, 0, "pineapple", "grapes");

console.log("After splice insert:", fruits);

// indexof()

let bananaIndex = fruits.indexOf("banana");

console.log("Index of banana:", bananaIndex);

// includes()

let isAppleExist = fruits.includes("apple");

console.log("Does fruits include apple?", isAppleExist);

// tostring()

console.log(numbers);

let numbersString = numbers.toString();

console.log("Converted Array to string:", numbersString);

