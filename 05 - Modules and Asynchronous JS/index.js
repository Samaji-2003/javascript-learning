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



//DOM navigation

//first element child
const elem = document.getElementById("item-list");
const firstChild = elem.firstElementChild;
firstChild.style.color = "red";



//last element child
const elem1 = document.getElementById("product-list");
const lastChild = elem1.lastElementChild;
lastChild.style.backgroundColor = "purple";

//next element sibling
const element2 = document.getElementById("p1");
const nextSibling = element2.nextElementSibling;
nextSibling.style.fontSize = "40px";

//previous element sibling
const element3 = document.getElementById("p2");
const previousSibling = element3.previousElementSibling;
previousSibling.style.color = "aqua";

//parent element
const element4 = document.getElementById("p1");
const parentElement = element4.parentElement;
parentElement.style.backgroundColor = "lightgrey";

//children
const children = elem.children;
for(let child of children){
    child.style.fontWeight = "bold";
}

//1.create html elements
const newh1 = document.createElement("h1");
//2.add attributes and content
newh1.textContent = "This is a new heading";
newh1.style.color = "green";
newh1.id = "new-heading";
//3.insert into DOM
document.body.append(newh1);
document.body.prepend(newh1);
document.getElementById("box1").append(newh1);

const box2 = document.getElementById("box2");
document.body.insertBefore(newh1, box2);

//4.remove elements

document.body.removeChild(newh1);
//or
newh1.remove();

//if that inside another element
//document.getElementById("box1").removeChild(newh1);


const newlist =document.createElement("li");
 newlist.textContent = "Mango";
 newlist.id = "mango";

 //document.body.append(newlist);
document.getElementById("fruits-list").appendChild(newlist);
document.getElementById("fruits-list").insertBefore(newlist, document.getElementById("banana"));

//remove
document.getElementById("fruits-list").removeChild(newlist);
