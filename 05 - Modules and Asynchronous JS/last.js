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

