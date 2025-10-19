// Variable Declaration and Initialization
let x;
x = 100;
console.log(x); 
let name = "Samaji";

let age = 22;
console.log(`I am ${age} years old.`);
console.log(typeof age); // number
console.log(typeof name);

let online = true;
let forSale = false;
console.log(typeof online); // boolean
console.log(`is this frock is for sale : ${forSale}`);
console.log(online);

document.getElementById("p1").textContent = name;
document.getElementById("p2").textContent = age;
document.getElementById("p3").textContent = `I am online :${online}`;

// Arithmetic Operations
let students = 30;

students = students + 1;
console.log(students);
students = students*2;
console.log(students);
students = students**2;
console.log(students);
students /= 2;
students -= 10;
students %= 7;
students--;

//Accept user input

//let username = window.prompt("what is your name?");
//console.log(username)

 document.getElementById("sumbitbtn").onclick = function(){
    //put everything we gonna do when button is clicked
   let username = document.getElementById("username").value;
    console.log(username);
    document.getElementById("myh1").textContent = "Hello " + username;
 }

 //type conversion

 let age2 = window.prompt("what is your age?");
 console.log(typeof age2);
 age2 = Number(age2); // converting string to number
 console.log(age2);
 
 let p = "pizza";
 let q = "pizza";
 let r1 = "pizza";

 p = Boolean(p);
 q = Number(q);
 r1 = String(r1);

 console.log(typeof p, p);
 console.log(typeof q, q);
 console.log(typeof r1, r1);

//constant variable
const PI = 3.14;

let c;
let r;

document.getElementById("calculateBtn").onclick = function(){
    r = document.getElementById("radius").value;
    r = Number(r);
    c = 2 * PI * r;
    document.getElementById("circumferenceResult").textContent = c;
}

//Math object
console.log(Math.PI);
console.log(Math.sqrt(16));
console.log(Math.pow(2,5)); 
console.log(Math.E);
console.log(Math.round(5.889886));
console.log(Math.floor(5.889886));
console.log(Math.ceil(5.11123));
console.log(Math.min(5,2,8,1,4));
console.log(Math.max(5,2,8,1,4));
console.log(Math.trunc(5.89999));//eliminate decimal portion
console.log(Math.sin(0));
console.log(Math.cos(0));   


//Random number generation
let randomNum = Math.random();
console.log(randomNum); //between 0 and 1

randomNum =Math.floor(randomNum*7);

//random number generated between 0 to 6
let rollBtn = document.getElementById("rollDiceBtn");
let diceResult = document.getElementById("diceResult");
let rn;
const min =1;
const max = 6;
rollBtn.onclick = function(){
    rn = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("diceResult").textContent = rn;
}
