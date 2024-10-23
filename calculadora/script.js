
const buttons = document.querySelectorAll('button');
let calculateBtn = document.querySelector('#calculate-btn')
let painelIndex = document.querySelector('#solution');
let painelCalc = document.querySelector('#calculating');

let n1 = ''
let op = undefined
let n2 = ''

painelCalc.textContent = undefined
painelIndex.textContent = undefined

buttons.forEach(button => {
    let buttonValue = undefined
    let res
    
    button.addEventListener('click', (event) => {
        buttonValue = event.target.textContent;
        

        if(!isButtonValid(buttonValue)){
            return
        }
        
        if(buttonValue == '/' || buttonValue == '*' || buttonValue == '+' || buttonValue == '-'){
            op = buttonValue
            res = op
        }else if(op == undefined){
            n1 += buttonValue
            res = n1
        }else if(op != undefined){
            n2 += buttonValue
            res = n2
        }
        
        painelValue(buttonValue,res)
        
        console.log(`n1: ${n1} operator: ${op} n2: ${n2}`)
    })
})

function calculate(n1,op,n2){
    let number1 = Number(n1)
    let number2 = Number(n2)
    let operator = String(op)
    let calc;

    switch(operator){
        case '+':
            calc = number1 + number2
            break
        case '-':
            calc = number1 - number2
            break
        case '*':
            calc = number1 * number2
            break
        case '/':
            calc = number1 / number2
            break
        default:
        alert('[ERRO] Tente novamente mais tarde')
        return
    }
    painelIndex.innerHTML = '' 
    painelValue(calc)

}   


function isButtonValid(buttonValue){
    if(buttonValue == 'C' || buttonValue == 'CE' || buttonValue == '='){
        return false
    }else if(buttonValue == '/' || buttonValue == '*' || buttonValue == '+' || buttonValue == '-'){
        return true
    }else{
        return true
    }
}

function painelValue(buttonValue,res){
    let numbersArr = [res]
    if(!isButtonValid(buttonValue)){
        painelIndex.textContent += ''
    }else{
        painelIndex.innerHTML += buttonValue
        painelCalc.innerHTML += numbersArr
    }
}

calculateBtn.addEventListener('click', () => {
    calculate(n1,op,n2)
})

