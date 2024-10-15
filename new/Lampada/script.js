/*
     fiz sozinho antes de ver o professor codar, muito feliz com o resultado
     feito em menos de 5 minutos, feliz que estou melhorando
*/

const lamp = document.querySelector('img')
const btnOn = document.querySelector('#turnOn')
const btnOff = document.querySelector('#turnOff')
let isBroken = false

btnOn.addEventListener('click', turnOn)
btnOff.addEventListener('click', turnOff)

lamp.addEventListener('dblclick', breakLamp)
lamp.addEventListener('mouseover', turnOn)
lamp.addEventListener('mouseout', turnOff)

function turnOn(){
    if(!isBroken){     // outro jeito que aprendi no video, !isBroken
        lamp.src = 'img/ligada.jpg'
    }
}

function turnOff(){
    if(isBroken == true){   // jeito que eu fiz
        return
    }
    lamp.src = 'img/desligada.jpg'
}

function breakLamp(){
    isBroken = true
    lamp.src = 'img/quebrada.jpg'
}