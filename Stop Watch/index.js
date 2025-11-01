const display = document.getElementById('display');
let timer = null;
let elapsedTime = 0;
let running = false;

function start() {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(update,10);
    running = true;

}

function stop() {
    if (running) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        running = false;
    }
}

function reset() {
    clearInterval(timer);
    elapsedTime = 0;
    display.textContent = "00:00:00:00";
    running = false;

}

function update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / 3600000);
    let minutes = Math.floor((elapsedTime % 3600000) / 60000);
    let seconds = Math.floor((elapsedTime % 60000) / 1000);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);
    display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
}

function pad(number) {
    return String(number).padStart(2, '0');
}