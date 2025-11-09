//callback hell

function task1(callback){
    console.log("Task 1 completed");
    callback();
}

function task2(callback){
    console.log("Task 2 completed");
    callback();
}
function task3(callback){
    console.log("Task 3 completed");
    
}

task1(() => {
    task2(() => {
        task3(() => {
            console.log("All tasks completed");
        });
    });
});

//promise 
function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Dog walked");
            resolve();
        }, 2000);
    });
}

function cleanHouse(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("House cleaned");
            resolve();
        }, 3000);
    });
}

function cookFood(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Food cooked");
            resolve();
        }, 1000);
    });
}

cleanHouse().then(() => {
    cookFood().then(() => {
        walkDog();
    }).catch((error) => {
        console.log("Error: " + error);
    });
});

//Async/Await
//async = function that always returns a promise
//await = wait for a promise to be resolved
 async function performTasks(){
    const walkDogr =await walkDog();
    console.log(walkDogr);

    const cleanHouser = await cleanHouse();
    console.log(cleanHouser);

    const cookFoodr = await cookFood();
    console.log(cookFoodr);

    console.log("All tasks completed");
 }


 //json

 const names = ["John", "Jane", "Doe", "Alice", "Bob"];

 const namesJSON = JSON.stringify(names);
 console.log(namesJSON);//converts to json string as one line

 const namesArray = JSON.parse(namesJSON);
 console.log(namesArray);//converts back to array



fetch("person.json")
.then(response => response.json())
.then(values => values.forEach(value => console.log(value.name)))
.catch(error => console.log("Error: " + error));

//fetch api

//http req to fetch resources


fetch(" https://pokeapi.co/api/v2/pokemon/pikachu")
.then(response => response.json())
.then(data => console.log(data.name))
.catch(error => console.log("Error: " + error));

async function fetchData(params) {
    try{
        const response = await fetch(" https://pokeapi.co/api/v2/pokemon/typhlosion");
        const data = await response.json();
        console.log(data.name);
    }
     catch (error) {
        console.log("Error: " + error);
    }
}
