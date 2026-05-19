let firstNumber = null
let operator = null
let typingSecondNumber = false
let shouldResetDisplay = false

let display = document.querySelector(".display")
let button7 = document.querySelector(".button7")
let button8 = document.querySelector(".button8")
let button9 = document.querySelector(".button9")
let button4 = document.querySelector(".button4")
let button5 = document.querySelector(".button5")
let button6 = document.querySelector(".button6")
let button1 = document.querySelector(".button1")
let button2 = document.querySelector(".button2")
let button3 = document.querySelector(".button3")
let button0 = document.querySelector(".button0")
let division = document.querySelector(".division")
let multiplication = document.querySelector(".multiplication")
let equal = document.querySelector(".equal")
let substraction = document.querySelector(".substraction")
let addition = document.querySelector(".addition")
let buttonDot = document.querySelector(".buttonDot")

function additionFunc(a,b){
    return a+b
}
function substractionFunc(a,b){
    return a-b
}
function multiplicationFunc(a,b){
    return a*b
}
function divisionFunc(a,b){
    return a/b
}



function operate(operator, a, b){
    if (operator === "+"){
        shouldResetDisplay = true
        return additionFunc(a,b)
    }
    if (operator === "-"){
        shouldResetDisplay = true
        return substractionFunc(a,b)
    }
    if(operator === "*"){
        shouldResetDisplay = true
        return multiplicationFunc(a,b)
    }
    if(operator === "÷"){
        shouldResetDisplay = true
        return divisionFunc(a,b)
    }
}

function onDigitClick(digit){
    if (shouldResetDisplay === true){
        display.textContent = ""
        shouldResetDisplay = false
    }
    display.textContent += digit
}
function onOperatorClick(selectedOperator){
    firstNumber = Number(display.textContent)
    operator = selectedOperator
    shouldResetDisplay = true
}
function onEqualsClick(){
    if (operator === null){
        return
    }
    let secondNumber = Number(display.textContent)
    let result = operate(operator, firstNumber, secondNumber)
    display.textContent = result
}



button7.addEventListener("click", () => onDigitClick("7"))
button8.addEventListener("click", () => onDigitClick("8"))
button9.addEventListener("click", () => onDigitClick("9"))
button4.addEventListener("click", () => onDigitClick("4"))
button5.addEventListener("click", () => onDigitClick("5"))
button6.addEventListener("click", () => onDigitClick("6"))
button1.addEventListener("click", () => onDigitClick("1"))
button2.addEventListener("click", () => onDigitClick("2"))
button3.addEventListener("click", () => onDigitClick("3"))
button0.addEventListener("click", () => onDigitClick("0"))
addition.addEventListener("click", () => onOperatorClick("+"))
substraction.addEventListener("click", () => onOperatorClick("-"))
multiplication.addEventListener("click", () => onOperatorClick("*"))
division.addEventListener("click", () => onOperatorClick("÷"))
equal.addEventListener("click", () => onEqualsClick())




