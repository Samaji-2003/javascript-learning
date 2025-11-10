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


let a = "123";
let b = 99.99;
let c = true;

a = Number(a);
b = Math.floor(b);
c = String(c);

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);




function checkAge() {
    const userAge = document.getElementById("userAge").value;
    if(userAge >= 18) {
        document.getElementById("ageResult").innerText = "You are an adult.";
    }
    else if(userAge > 13 && userAge < 18) {
        document.getElementById("ageResult").innerText = "You are a teenager.";
    }
    else {
        document.getElementById("ageResult").innerText = "You are a child.";
    }

}

function checkGrade() {
    const userGrade = document.getElementById("userGrade").value;

    switch(userGrade){
        case 'userGrade>75':
            document.getElementById("gradeResult").innerText = "A";
        case 'userGrade>60':
            document.getElementById("gradeResult").innerText = "B";
        case 'userGrade>50':
            document.getElementById("gradeResult").innerText = "C";
        case 'userGrade>40':
            document.getElementById("gradeResult").innerText = "D";
        default:
            document.getElementById("gradeResult").innerText = "F";
    }
}

function checkNumber() {
    const userNumber = document.getElementById("userNumber").value;

    switch(userNumber){
        case '1':
            document.getElementById("numberResult").innerText = `you selected ${document.getElementById("item1").innerText}`;
            break;
        case '2':
            document.getElementById("numberResult").innerText = `you selected ${document.getElementById("item2").innerText}`;
            break;
        case '3':
            document.getElementById("numberResult").innerText = `you selected ${document.getElementById("item3").innerText}`;
            break;
        case '4':
            document.getElementById("numberResult").innerText = `you selected ${document.getElementById("item4").innerText}`;
            break;
        default:
            document.getElementById("numberResult").innerText = "Invalid selection";
    }
}

function login(){
    const username = document.getElementById("userName").value;
    const password = document.getElementById("userPassword").value;

    if(username === "admin" && password === "1234"){
        document.getElementById("loginResult").innerText = "Login successful!";
    }
    else{
        document.getElementById("loginResult").innerText = "Login failed!";
    }
}


//loops

function printNumbers() {
    for(let i=1; i<=10; i++) {
        console.log(i);
    }
}

printNumbers();

function printEvenNumbers() {
    for(let i=1; i<=20; i++) {
        if(i % 2 === 0) {
            console.log(i);
        }
    }
}
printEvenNumbers();

function sumNumbers() {
    let sum = 0;
    for(let i = 1; i<=100; i++){
        sum += i;
    }
    console.log("Sum: " + sum);
}
sumNumbers();
function factorial(num){
    let result = 1;
    for(let i = 1; i <= num; i++){
        result *= i;
    }
    return result;
}
factorial(5);


function guess(){
    const no = 10;
    const guessNo = Math.floor(Math.random() * 20) + 1;
    while(guessNo !== no){
        console.log("You guessed: " + guessNo + ". Try again!");
        return;
    }
    if(guessNo === no){
        console.log("Congratulations! You guessed the correct number: " + no);
    }
}
guess();

function square(number){
    return number * number;
}

console.log(square(5));

function bmi(weight, height){
    const bmiValue = weight / (height * height);
    return bmiValue.toFixed(2);
}

bmi(54, 1.65);

function prime(num){
    if(num <= 1) return false;
    for(let i = 2; i < num; i++){
        if(num % i === 0) return false;
    }
    return true;
}
console.log(prime(7));

function reverse(word){
    for(let i = word.length - 1; i >= 0; i--){
        console.log(word[i]);
    }
}

reverse("hello");

(num) => {
    if(num % 2 === 0){
        console.log("Even");
    }
    else{
        console.log("Odd");
    }

}