//while loop

/*let username = "";

while(username === ""){
    username = window.prompt("Enter your name: ");
}

console.log(`Hello ${username}!`);*/
 let loggedIn = false;

 let un = "";
 let pw = "";

 while(!loggedIn){
    un = window.prompt("Enter your username: ");
    pw = window.prompt("Enter your password: ");


    if(un === "samaji" && pw === "12345"){
        loggedIn = true;
        console.log("Login successful!");
    }
    else if(un === "" || pw === ""){
        console.log("Username and password cannot be empty.");
    }

    else{
        console.log("Invalid username or password. Please try again.");
    }
 }


//for loop

for(let i = 0; i < 6; i++){

    if (i == 3) {
        continue; //skip the iteration when i is 3
    }

    if (i == 5) {
        break; //exit the loop when i is 5
    }
    console.log(`Iteration number: ${i}`);
}

//number guessing game

const min = 1;
const max = 100;

const answer = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(answer); //for testing purposes
 let game = true;
while(game){
    let guess = window.prompt (`guess number between ${min} and ${max}`);
    guess = Number(guess);

    if(guess === answer){
        console.log("Congratulations! You guessed the correct number.");
        game = false;
    }
}