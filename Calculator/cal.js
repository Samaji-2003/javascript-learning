const display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        display.value = eval(display.value);//eval is used to evaluate the string expression
    } catch (error) {
        display.value = 'Error';
    }
}