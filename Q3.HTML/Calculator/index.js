let currentInput = "";
let operator = "";
let firstOperand = "";
let secondOperand = "";

function appendToScreen(value) {
    currentInput += value;
    document.getElementById("screen").value = currentInput;
}

function clearScreen() {
    currentInput = "";
    operator = "";
    firstOperand = "";
    secondOperand = "";
    document.getElementById("screen").value = "";
}

function setOperator(op) {
    if (currentInput !== "") {
        operator = op;
        firstOperand = currentInput;
    }
}

function calculate() {
    secondOperand = currentInput.substring(currentInput.indexOf(operator)+1,currentInput.length);
    if (operator !== "" && secondOperand!=="") 
    {
        
        switch (operator) {
            case "+":
                currentInput = (parseFloat(firstOperand) + parseFloat(secondOperand)).toString();
                break;
            case "-":
                currentInput = (parseFloat(firstOperand) - parseFloat(secondOperand)).toString();
                break;
            case "*":
                currentInput = (parseFloat(firstOperand) * parseFloat(secondOperand)).toString();
                break;
            case "/":
                if (parseFloat(secondOperand) !== 0) {
                    currentInput = (parseFloat(firstOperand) / parseFloat(secondOperand)).toString();
                } else {
                    currentInput = "Error";
                }
                break;
        }
        operator = "";
        firstOperand = "";
        secondOperand = "";
        document.getElementById("screen").value = currentInput;
    }
}
