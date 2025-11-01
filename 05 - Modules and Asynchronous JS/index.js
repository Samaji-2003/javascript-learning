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

