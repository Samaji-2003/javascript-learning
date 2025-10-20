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
