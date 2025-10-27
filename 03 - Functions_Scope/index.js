//array

let arr = [1, 2, 3, 4, 5];

console.log(arr[3]);
console.log(arr.length);
arr.push(6);
console.log(arr);
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift(0);
console.log(arr);

console.log("arr.indexOf(4):", arr.indexOf(4));

for(let num of arr){
    console.log(num);
}

arr.sort().reverse();
console.log("Sorted and Reversed Array:", arr);

//spread operator

let numbers = [1, 2, 3, 4, 5];
let max = Math.max(...numbers);// we can't directly apply maths operatotors we have to use spread operator ... like opening a box
console.log("Max number is:", max);

let name = "samaji";
let chars = [...name].join("/");
console.log("Characters separated by '/':", chars);

//rest operator

function nums(...no){
    console.log(...no);
}

const no1 = 1;
const no2 = 2;
const no3 = 3;
nums(no1, no2, no3);

//random password generator

function passwordGenerator(length, lower, upper, numbers, symbols){
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    const possibleChars = (lower ? lowerChars : "") +
    (upper ? upperChars : "") +
    (numbers ? numberChars : "") +
    (symbols ? symbolChars : "");



    let password = "";
    for(let i =0; i<length; i++){
        const randomIndex = Math.floor(Math.random() * possibleChars.length);
        password += possibleChars[randomIndex];
    }
    return password;


}

const length = 12;
const lower = true;
const upper = true;
const numbersFlag = true;
const symbols = true;

const password = passwordGenerator(length, lower, upper, numbersFlag, symbols);
console.log("Generated Password:", password);

//callback function

hello(greet);

function hello(callback){
    console.log("hello");
    callback();
}

function greet() {
    console.log("good morning");
}

sum(print , 1, 2);
function sum(callback, a, b){
    let result = a+b;
    callback(result);
}

function print(r){
    console.log("Sum is:", r);
}

//forEach method

let numbersArr = [1, 2, 3, 4, 5];

numbersArr.forEach(display);//display(1);display(2);

function display(no){
    console.log(no);
}

numbersArr.forEach(double);
numbersArr.forEach(display);

function double(no, index, arr){
    arr[index] = no * 2;
}


let fruits = ["apple", "banana", "cherry"];

function capitalize(element,index, array){
    array[index]= element.charAt(0).toUpperCase()+ element.slice(1);
}

fruits.forEach(capitalize);
console.log("Capitalized Fruits:", fruits);



//map method

const numsArr = [1, 2, 3, 4, 5];
const squaredArr = numsArr.map(square);//returndiffrent array

console.log("Original Array:", numsArr);
console.log("Squared Array:", squaredArr);

function square(no){
    return no * no;
}