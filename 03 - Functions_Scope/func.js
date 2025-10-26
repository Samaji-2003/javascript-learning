const { Fragment } = require("react/jsx-runtime");

function hbd(name){
    console.log("Happy Birthday to You!");
    console.log("Happy Birthday to You!");
    //console.log(`Happy Birthday dear ${name}!`);
    console.log("Happy Birthday to You!");
}

hbd("samaji");
hbd("sama");


function isValidEmail(email){
    if(email.includes("@") && email.includes(".")){
        return true;
    }
    return false;
}

console.log(isValidEmail("example@gmail.com"));

//temparature converter



function convertTemperature(){
    
    const temp = Number(document.getElementById("Temperature").value);
    const toC = document.getElementById("toC");
    const toF = document.getElementById("toF");


    if(toC.checked){
        const celsius = (temp - 32) * 5/9;
        document.getElementById("result").textContent = celsius;
    }
    else if(toF.checked){
        const fahrenheit = (temp * 9/5) + 32;
        document.getElementById("result").textContent = fahrenheit;
    }
    else{
        alert("Please select a conversion type.");
    }
}
