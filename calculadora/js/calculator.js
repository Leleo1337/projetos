let previousOperationText = document.querySelector('#calculating')
let currentOperationText = document.querySelector('#solution')
const buttons = document.querySelectorAll('button')
const calculateBtn = document.querySelector('#calculate-btn')
const clearBtn = document.querySelector('#clear-btn')
const cancelEntryBtn = document.querySelector('#cancel-entry-btn')

currentOperationText.textContent = ''
previousOperationText.textContent = ''

let n1 = ''
let operator = ''
let n2 = ''


clearBtn.addEventListener('click', clearAll)  
cancelEntryBtn.addEventListener('click', cancelEntry)
calculateBtn.addEventListener('click', handleCalculate)


buttons.forEach((btn) => {
    btn.addEventListener('click', (event) =>{
        let clickedButton = event.target.textContent;
        if(blockedButtons(clickedButton)){
            return
        }
        if(isOperator(clickedButton)){
            if(n1 == '' && clickedButton == '-'){
                n1 = clickedButton
                display(n1)
            }else if(n1 != ''){
                operator = clickedButton
                display(operator)
            }
            return
        }

        if(clickedButton == '.'){
            if ((operator === '' && n1.includes('.')) || (operator !== '' && n2.includes('.'))) {
                return;
            }
            if(operator === '' && n1 == '.' || n1 == ''){
                operator = ''
                n1 = 0
            }
            if(operator !== '' && n2 == ''){
                n2 = 0
            }
        }

        if(operator == ''){
            n1 += clickedButton
        }else{
            n2 += clickedButton
        }
        

        console.log(`n1 : ${n1} op: ${operator} n2: ${n2}`)
        display()

    })
})



function calculate(n1,op,n2){
    let number1 = Number(n1)
    let op2 = String(op)
    let number2 = Number(n2)
    let result;

    switch(op2){
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2
            break
        default:
        currentOperationText.textContent = '[ERRO]'
        return
    }
    if(result > 1000000000){
        result = result.toExponential(2)
    }

    return result
} 

function handleCalculate(){
    if(n1 == '' || operator == ''){
        return
    }

    let result = calculate(n1,operator,n2)

    if(isNaN(result)){
        currentOperationText.textContent = '[ERRO]Valores invalidos!'
        previousOperationText.textContent = '[ERRO]Valores invalidos'
        return
    }

    
    previousOperationText.textContent = `${n1} ${operator} ${n2} = ${result}`;
    currentOperationText.textContent = result
    
    newOperation(result)
    return 
}

function display() {
    currentOperationText.textContent = `${n1} ${operator || ''} ${n2}`
}

function clearAll(){
    n1 = ''
    operator = ''
    n2 = ''
    result = ''
    currentOperationText.textContent = ''
    previousOperationText.textContent = ''
}

function cancelEntry(){
    if(n2 != ''){
        n2 = n2.slice(0, -1)
    }else if(operator !== ''){
        operator = ''
    }else if(n1 != ''){
        n1 = n1.slice(0, -1)
    }
    display()
}

function newOperation(result){
    n1 = result.toString()
    operator = ''
    n2 = ''
}

function isOperator(clickedButton){
    return clickedButton === '/' || clickedButton === '*' ||clickedButton === '-' ||clickedButton === '+' 
}

function blockedButtons(clickedButton){
    return clickedButton === 'C' || clickedButton === 'CE' || clickedButton === '='
}

