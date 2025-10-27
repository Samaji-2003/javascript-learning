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