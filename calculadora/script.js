const additionBtn = document.querySelector('#addition-btn')
const subtractionBtn = document.querySelector('#subtraction-btn')
const multiplicationBtn = document.querySelector('#multiplication-btn')
const divisionBtn = document.querySelector('#division-btn')



let n1;
let n2;

function calculate(n1,n2){
    additionBtn.addEventListener('click', () => {op = additionBtn.textContent})
    subtractionBtn.addEventListener('click', () => {op = subtractionBtn.textContent})
    multiplicationBtn.addEventListener('click', () => {op = multiplicationBtn.textContent})
    divisionBtn.addEventListener('click', () => {op = divisionBtn.textContent})

    let res;
    let op;
    
    switch(n1, op, n2){
        case '+':
            res = n1 + n2
            break
        case '-':
            res = n1 - n2
            break
    }
    alert(res)
}

