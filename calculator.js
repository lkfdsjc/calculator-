const display = document.getElementById("display");

function add(value) {

    let lastChar = display.value.slice(-1);

    let operators = ["+", "-", "*", "/"];

    if (operators.includes(value)) {

        
        if (operators.includes(lastChar)) {
            return;
        }
    }
     


    display.value += value;
}
function calc() {
    display.value = eval(display.value);
}
function backspace() {
    display.value = display.value.slice(0, -1);
}

function clearDisplay() {
    display.value = "";
}
