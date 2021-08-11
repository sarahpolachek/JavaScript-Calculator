let trailingResult = 0;
let operationOptions = ['add', 'subtract', 'divide', 'multiply'];
let workingOperation = "";

function updateDisplay(input) {
    let display = document.getElementById("display");
    let secondaryDisplay = document.getElementById("secondaryDisplay");

    if (display.innerHTML === "0" && operationOptions.indexOf(input) === -1) {
        if (input === "decimal") {
            display.innerHTML = "0.";
        } else if (input === "negative-value") {
            if (display.innerHTML.indexOf("-1") === -1) {
                display.innerHTML = "-" + display.innerHTML
            } else if (display.innerHTML.indexOf("-1") > -1) {
                display.innerHTML = display.innerHTML.slice(1, display.innerHTML.length);
            }
        } else {
            display.innerHTML = input;
        }
    } else if (operationOptions.indexOf(input) >= 0) {
        // console.log("dealing with a operation");

        if (trailingResult === display.innerHTML) {
            //operand button pressed twice exception
            workingOperation = input;
        } else if (workingOperation === "") {
            //Dealing without an operand
            workingOperation = input;
            trailingResult = display.innerHTML;
            display.innerHTML = 0;
        } /*else if (input === "subtract") {
        display.innerHTML = "-" + display.innerHTML;
    } */ else {
            //Dealing with a set operand
            trailingResult = calculate(trailingResult, display.innerHTML, workingOperation);
            //secondaryDisplay.innerHTML = trailingResult;
            display.innerHTML = 0;
            workingOperation = input;
        }

    } else if (input === "equals") {
        display.innerHTML = calculate(trailingResult, display.innerHTML, workingOperation);
        trailingResult = 0;
        workingOperation = "";
    } else if (input === "decimal") {
        console.log('decimal clicked');
        if (display.innerHTML.indexOf(".") == -1) {
            display.innerHTML += ".";
        }
        // console.log("decimal skipped decimal already in number.");
    } else if (input === "negative-value") {
        console.log("negative-value selected");
        if (display.innerHTML.indexOf("-1") === -1) {
            display.innerHTML = "-" + display.innerHTML
        } else if (display.innerHTML.indexOf("-1") > -1) {
            display.innerHTML = display.innerHTML.slice(1, display.innerHTML.length);
        }
    } else {
        display.innerHTML += input;
    }

    // console.log(trailingResult, "<= trailingResult", display.innerHTML,"<= display.innerHTML", workingOperation, "<= workingOperation");

}
function clearDisplay() {
    let display = document.getElementById('display');
    trailingResult = 0;
    display.innerHTML = 0;
}

function calculate(firstNumber, secondNumber, operation) {
    let result;
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);
    switch (operation) {
        case "add":
            result = firstNumber + secondNumber;
            break;
        case "subtract":
            result = firstNumber - secondNumber
            break;
        case "multiply":
            result = firstNumber * secondNumber
            break;
        case "divide":
            result = firstNumber / secondNumber
            break;
        default:
        // console.log("Calculate switch statement missed something");

        // code block
    }
    return result.toString();
}
