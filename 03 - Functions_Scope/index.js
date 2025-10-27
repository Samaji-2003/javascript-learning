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

