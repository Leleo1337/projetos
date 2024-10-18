const img = document.querySelector('#img')
const buttons = document.querySelector('div#buttons')
let colorIndex = 0
let intervalID = null

const turnOn = {
    'red': () => img.src = './img/vermelho.png',
    'yellow': () => img.src = './img/amarelo.png',
    'green': () => img.src = './img/verde.png',
    'automatic': () => intervalID = setInterval(automaticColor, 1000)
}


buttons.addEventListener('click', trafficLight)

function trafficLight(event){
    stopAutomatic()
    const target = event.target.id
    turnOn[target]()
}

function automaticColor(){
    const colors = ['red', 'yellow', 'green']
    let color = colors[ colorIndex ]
    turnOn[color]()
    nextIndex()
}

function nextIndex(){
    colorIndex = colorIndex < 2 ? ++colorIndex : 0
}

function stopAutomatic(){
    clearInterval(intervalID)
}
