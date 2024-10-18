"use strict"; 

const sounds = {
    'A': './sounds/boom.wav',
    'S': './sounds/clap.wav',
    'D': './sounds/hihat.wav',
    'F': './sounds/kick.wav',
    'G': './sounds/openhat.wav',
    'H': './sounds/ride.wav',
    'J': './sounds/snare.wav',
    'K': './sounds/tink.wav',
    'L': './sounds/tom.wav',
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

const activateDiv = (event) =>{
    const key = event.target.id
    playSong(key)
}

const playSong = (key) =>{
    const audio = document.createElement('audio')
    audio.src = key
    audio.autoplay
    console.log(audio.src)
}

document.querySelector('.container').addEventListener('click', activateDiv)