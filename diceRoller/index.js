function roll(){
    const num = document.getElementById("numDice").value;
    const result = document.getElementById("result");
    const img = document.getElementById("diceImages");

    let rolls = [];
    let imgs = [];

    for(let i = 0; i < num; i++){
        const roll = Math.floor(Math.random() * 6) + 1;
        rolls.push(roll);
        imgs.push(`<img src="img/${roll}c.gif"></img>`);
    }
    result.innerHTML = rolls.join(", ");
    img.innerHTML = imgs.join(" ");
   
}