
//if statement
let age;
document.getElementById("checkButton").onclick = function(){
    age = document.getElementById("ageInput").value;
    age = Number(age);

if(age >= 18){
    document.getElementById("result").innerText = "You are an adult.";
}else if(age >= 13){
    document.getElementById("result").innerText = "You are a minor.";
}else{
    document.getElementById("result").innerText = "You are a child.";
}
}



let isStudent = true;

if(isStudent){
    console.log("You are a student.");
    if(age < 25){
        console.log("You are a young student.");
    }else{
        console.log("You are an adult student.");
    }
}else{
    console.log("You are not a student.");
}

//checked property
document.getElementById("btn").onclick = function(){
    let isChecked = document.getElementById("id1").checked;
    if(isChecked){
        document.getElementById("output").innerText = "Checkbox is checked.";
    }else{
        document.getElementById("output").innerText = "Checkbox is not checked.";
    }
}

// ternary operator

let q = 10;
let msg = q>5 ? "q is greater than 5" : "q is 5 or less";
console.log(msg);

let school = isStudent ? "You go to school." : "You don't go to school.";
console.log(school);

//switch statement
let day = 4;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

let testScore = 85;
let grade;

switch(true){
    case testScore >= 75:
        grade = "A";
        break;
    case testScore >= 60:
        grade = "B";
        break;
}  

//string methods

let userName = "samaji";

userName.charAt(0); // "s"
console.log(userName.charAt(0));

userName.indexOf("m"); // 2
console.log(userName.indexOf("m"));

userName.length; // 6
console.log(userName.length);

userName.trim(); // "samaji"
console.log(userName.trim());

userName.toUpperCase(); // "SAMAJI  "
console.log(userName.toUpperCase());

userName.toLowerCase(); // "samaji  "
console.log(userName.toLowerCase());

userName = userName.repeat(5); // "samajisamajisamajisamajisamaji"
console.log(userName.repeat(5));

let result = userName.startsWith("s"); // true
console.log(result);

result = userName.endsWith("i"); // true
console.log(result);

result = userName.includes("m"); // true
console.log(result);

let newUserName = userName.replace("s", "S"); // "Samaji  "
console.log(newUserName);

userName = userName.padStart(10, "*"); // "***samaji  "


//string slicing

let fruit = "Watermelon";
let word1 =fruit.slice(0,5); // "Water"
console.log(word1);

let word2 = fruit.slice(5); // "melon"
console.log(word2);

let word3 = fruit.slice(-3); // "lon"
console.log(word3);

let fruit2 = "dragon fruit"; 
let word4 = fruit2.slice(0,fruit2.indexOf(" ")); // "dragon"
console.log(word4);

let email = "samaji@example.com";
let emailUser = email.slice(0, email.indexOf("@")); // "samaji"
console.log(emailUser);

//method chaining

let un = window.prompt("Enter your name:").trim().toLowerCase();
console.log(un);

un = un.charAt(0).toUpperCase() + un.slice(1).toLowerCase();
console.log(un);

//logical operators

const temp = 20;

if(temp >0 && temp <= 30){
    console.log("The weather is good.");
}

else{
    console.log("The weather is bad.");
}

if(temp >20 || temp < 30){
    console.log("The weather is nice.");
}


const isSunny = true;

if(!isSunny){
    console.log("It is not sunny today.");
}

else
    console.log("It is sunny today.");


//strict equality vs loose equality

const PI = 3.14;

if (PI == "3.14") {
    console.log("PI is loosely equal to '3.14'");
}
else if(PI != 3.14){
    console.log("PI is loosely not equal to 3.14");
}


else if (PI === "3.14") {
    console.log("PI is strictly equal to '3.14'");
}
else if(PI !== 3.14){
    console.log("PI is not strictly equal to 3.14");
}
