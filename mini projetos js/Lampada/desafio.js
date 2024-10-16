/*
     desafio da aula, fazer um "toggle" no botão de 
     desligar e ligar

     demorei um pouco pra fazer kkk, mas a solução é bem facil
     pensei demais pra algo simples
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


btnOff.style.display = 'none'

function turnOn(){
    if(!isBroken){     
        lamp.src = 'img/ligada.jpg'
        btnOn.style.display = "none"
        btnOff.style.display = "block"
    }
}

function turnOff(){
    if(!isBroken ){  
        lamp.src = 'img/desligada.jpg'
        btnOn.style.display = "block"
        btnOff.style.display = "none"
    }
}

function breakLamp(){
    isBroken = true
    lamp.src = 'img/quebrada.jpg'
}