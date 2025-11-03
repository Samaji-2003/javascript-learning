//ES6 Modules (external file importing and exporting modules)

import { PI, getCircumference, getArea, getVolume } from './mathutil.js';

console.log("Value of PI:", PI);
console.log("Circumference of circle with radius 5:", getCircumference(5));
console.log("Area of circle with radius 5:", getArea(5));
console.log("Volume of sphere with radius 5:", getVolume(5));


//Asynchronous

function main(callback) {
    setTimeout(() => {console.log("0"); 
                        callback();}, 2000);
}

function f1() {
   setTimeout(() => console.log("1"), 5000);
}

function f2() {
    console.log("2");
    console.log("3");
}

main(f2);
f1();

//error handling

//try use catch to handle errors gracefully . errors like network,promise rejections,security etc.
try{
    let result = someUndefinedFunction(); // This will throw an error
    console.log(result);
}catch(error){
    console.error("Error occurred:", error);
}
finally{
    //use to close resources or cleanup actions
    console.log("Execution completed.");
}

console.log("Program continues...");


//DOM

console.dir(document);
console.log("Title of the document:", document.title); 

document.body.style.backgroundColor = "#2c2626ff";

const un = "Samaji";
const hello = document.getElementById("hello");

hello.textContent = "hi hi";

//element selector

const header = document.getElementById("hello");
console.log("Header element:", header);
header.style.color = "red";

console.log(header.innerText);

const fruits = document.getElementsByClassName("fruits");
console.log("Fruits elements:", fruits);

fruits[0].style.backgroundColor = "yellow";
for(let fruit of fruits){
    fruit.style.fontSize = "20px";
}

Array.from(fruits).forEach(fruit => {
    fruit.style.color = "blue";
});





const h1Elements = document.getElementsByTagName("h1");
console.log("H1 elements:", h1Elements);

const ulElement = document.getElementsByTagName("ul");
console.log("UL elements:", ulElement);

ulElement[0].style.backgroundColor = "pink";

Array.from(ulElement).forEach(ul => {
    ul.style.fontSize = "18px";
});


const element = document.querySelector(".fruits");//only retunts first match
console.log("First element with class 'fruits':", element);
element.style.border = "2px solid green";



const allElements = document.querySelectorAll(".fruits");//returns all matches
console.log("All elements with class 'fruits':", allElements);