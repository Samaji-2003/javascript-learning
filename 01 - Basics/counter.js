const decrementButton = document.getElementById('decrement');
const incrementButton = document.getElementById('increment');
const resetButton = document.getElementById('reset');
const counterDisplay = document.getElementById('count');

let count = 0;

incrementButton.onclick = function(){
    count++;
    counterDisplay.textContent = count;
}

decrementButton.onclick = function(){
    count--;
    counterDisplay.textContent = count;
}

resetButton.onclick = function(){
    count = 0;
    counterDisplay.textContent = count;
}