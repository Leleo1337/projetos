let previousOperationText = document.querySelector('#calculating')
let corruentOperationText = document.querySelector('#solution')
const buttons = document.querySelectorAll('button')
const calculateBtn = document.querySelector('#calculate-btn')
const clearBtn = document.querySelector('#clear-btn')
const cancelEntryBtn = document.querySelector('#cancel-entry-btn')

corruentOperationText.textContent = ''
previousOperationText.textContent = ''

let n1 = ''
let operator = undefined
let n2 = ''


// eventos
clearBtn.addEventListener('click', update)
cancelEntryBtn.addEventListener('click', cancelEntry)
calculateBtn.addEventListener('click', handleCalculate)

buttons.forEach((btn) => {
    btn.addEventListener('click', (event) =>{
        let clickedButton = event.target.textContent;
        if(blockedButtons(clickedButton)){
            return
        }
        if(isOperator(clickedButton)){
            if(n1 == ''){
                n1 = clickedButton
                display(n1)
            }else{
                operator = clickedButton
                display(operator)
            }
            return
        }
        if(operator == undefined){
            n1 += clickedButton
        }
        if(operator != undefined){
        
            n2 += clickedButton
        }
        if(operator == 0){

        }
        display(clickedButton)
        
        console.log(`N1: ${n1}, OP: ${operator}, N2: ${n2}`)
    })
})

function calculate(n1,op,n2){
    let number1 = Number(n1)
    let op2 = String(op)
    let number2 = Number(n2)
    
    switch(op2){
        case '+':
           res = number1 + number2
            break
        case '-':
            res = number1 - number2
            break
        case '*':
            res = number1 * number2
            break
        case '/':
            res = number1 / number2
            break
        default:
        corruentOperationText.textContent = '[ERRO]'
        return
    }
    return res
} 
function isOperator(clickedButton){
    return clickedButton == '/' || clickedButton == '*' ||clickedButton == '-' ||clickedButton == '+' 
}
function blockedButtons(clickedButton){
    return clickedButton == 'C' || clickedButton == 'CE' || clickedButton == '='
}

function display(clickedButton) {
    corruentOperationText.textContent += clickedButton
    calculateBtn.addEventListener('click', ()=>{
        corruentOperationText.textContent = res
    })
}

function update(){
    n1 = ''
    operator = undefined
    n2 = ''
    res = undefined
    corruentOperationText.textContent = ''
    previousOperationText.textContent = ''
}

function handleCalculate(){
    if(n1 == '' || operator == undefined){
        return
    }
    let res = calculate(n1,operator,n2)
    previousOperationText.textContent = `${n1} ${operator} ${n2} = ${res}`;
    display(res)
    n1 = res
    operator = undefined
    n2 = ''
}

