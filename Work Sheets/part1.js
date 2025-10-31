function print() {

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const favColor = document.getElementById("color").value;

    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Favourite Color: " + favColor);
}


function calculate() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;

    if(document.getElementById("add").checked) {
        const sum = num1 + num2;
        document.getElementById("result").innerText = "Result: " + sum;
    }
    else if(document.getElementById("sub").checked) {
        const difference = num1 - num2;
        document.getElementById("result").innerText = "Result: " + difference;
    }
    else if(document.getElementById("mul").checked) {
        const product = num1 * num2;
        document.getElementById("result").innerText = "Result: " + product;
    }
    else if(document.getElementById("div").checked) {
        const quotient = num1 / num2;
        document.getElementById("result").innerText = "Result: " + quotient;
    }
    else if(document.getElementById("rem").checked) {
        const remainder = num1 % num2;
        document.getElementById("result").innerText = "Result: " + remainder;
    }
    else if(document.getElementById("power").checked) {
        const power = Math.pow(num1, num2);
        document.getElementById("result").innerText = "Result: " + power;
    }
}


const a = "123";
const b = 99.99;
const c = true;

a = Number(a);
b = Math.floor(b);
c = String(c);

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);


