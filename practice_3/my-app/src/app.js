let buttons = document.getElementsByTagName("button");
let displayField = document.getElementById("answer");
let flag_do_replace = true;
let operator = null;
const MAX_LENGTH = 8;
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", handel)
}

function reset() {
    flag_do_replace = true;
    operator = null;
}

function formatResult(result) {
    result = String(result);
    if (result.length > MAX_LENGTH) {
        let dotIndex = result.indexOf(".");
        if (dotIndex < 0 || dotIndex > MAX_LENGTH - 1) {
            displayField.innerHTML = "Error: number too big"
        } else {
            result = Number(result).toFixed(MAX_LENGTH - 1 - dotIndex);
        }
    }
    displayField.innerHTML = result;
}

function handel(e) {
    let eventTarget = e.target.value;
    if (!(isNaN(eventTarget))) {
        if (flag_do_replace) {
            displayField.innerHTML = eventTarget;
            flag_do_replace = false;
        } else {
            if (displayField.innerHTML.length < MAX_LENGTH) {
                displayField.innerHTML += eventTarget;
            }
        }
    } else if (eventTarget === "c") {
        reset();
        displayField.innerHTML = 0;
    } else if (eventTarget === "=") {
        b = Number(displayField.innerHTML);
        if (operator === "+") {
            formatResult(a + b);
        } else if (operator === "-") {
            formatResult(a - b);
        } else if (operator === "*") {
            formatResult(a * b);
        } else if (operator === "/") {
            formatResult(a / b);
        }
        reset();
    }
    else {
        a = Number(displayField.innerHTML);
        flag_do_replace = true;
        operator = eventTarget;
    }
}
