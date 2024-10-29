const display = document.querySelector('.display')
const numbers = document.querySelectorAll('[id*=tecla]')
const operators = document.querySelectorAll('[id*=operador]')

let newNumber = true
let operator;
let previousNumber;

const updateDisplay = (text) => {
    if(newNumber){
        display.textContent = text
        newNumber = false
    }else{
        display.textContent += text
    }
}

const insertNumber = (event) => updateDisplay(event.target.textContent)
const insertOperator = (event) => {
    if(!newNumber){
        calculate()
        newNumber = true
        operator = event.target.textContent
        previousNumber = display.textContent
    }
}

const calculate = () =>{
    if(hasPendingOperation()){
        const corruentNumber = display.textContent
        newNumber = true
        if(operator == '+'){
            updateDisplay(Number(previousNumber) + Number(corruentNumber))
        }
    }
}

const hasPendingOperation = () => operator != undefined

numbers.forEach(numbers =>{
    numbers.addEventListener('click', insertNumber)
})

operators.forEach(operator =>{
    operator.addEventListener('click', insertOperator)
})