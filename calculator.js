const display = document.getElementById("display");

function add(value) {

    let lastChar = display.value.slice(-1);

    let operators = ["+", "-", "*", "/"];

    // لو المستخدم بيحاول يحط operator
    if (operators.includes(value)) {

        // لو آخر حرف برضو operator → منسمحش
        if (operators.includes(lastChar)) {
            return;
        }
    }

    display.value += value;
}
function calc() {
    display.value = eval(display.value);
}

function clearDisplay() {
    display.value = "";
}
