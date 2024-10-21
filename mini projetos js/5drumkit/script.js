"use strict"; 

const sounds = {
    'A': 'boom.wav',
    'S': 'clap.wav',
    'D': 'hihat.wav',
    'F': 'kick.wav',
    'G': 'openhat.wav',
    'H': 'ride.wav',
    'J': 'snare.wav',
    'K': 'tink.wav',
    'L': 'tom.wav',
}

const criarDiv = (text) =>{
    const newDiv = document.createElement('div')
    newDiv.classList.add('key')
    newDiv.textContent = text
    newDiv.id = text
    document.querySelector('.container').appendChild(newDiv)
}

const exibir = (sounds) => Object.keys(sounds).forEach(criarDiv)

exibir(sounds)

const effect = (key) => document.getElementById(key).classList.add('active')
const removeEffect = (key) => {
    const div = document.getElementById(key)
    const removeActive = () => div.classList.remove('active')
    div.addEventListener('transitionend', removeActive)
}

const activateDiv = (event) =>{
    const key = event.type != 'click' ? event.key.toUpperCase(): event.target.id

    const letterExists = sounds.hasOwnProperty(key)
    if(letterExists){
        effect(key)
        playSong(key)
        removeEffect(key)
    }
}


const playSong = (key) =>{
    const audio = new Audio(`./sounds/${sounds[key]}`)
    audio.volume = 0.4
    audio.play()
}

document.querySelector('.container').addEventListener('click', activateDiv)
window.addEventListener('keydown', activateDiv)