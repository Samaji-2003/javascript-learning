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

console.log(isValidEmail(ex@gmail.com))