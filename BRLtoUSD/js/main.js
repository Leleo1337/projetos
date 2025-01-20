import { updateDisplay, updateBrlToUsd, updateUsdToBrl } from "./fetchCorrency.js";

const brlInput = document.querySelector('.brl input')
const usdInput = document.querySelector('.usd input')

startApplication()

window.setInterval(() => {
    updateInputWidth(brlInput)
    updateInputWidth(usdInput)
},1)

async function startApplication() {
    await updateDisplay()
    
    updateInputWidth(brlInput)
    updateInputWidth(usdInput)
}

function updateInputWidth(input){
    const textLength = input.value.length;
    let newWidth = Math.max(40 * textLength, 90);
    if(newWidth > 600){
        newWidth = 600
    }
    input.style.width = `${newWidth}px`;
}

//debounce
let timer;
const delay = 500

brlInput.addEventListener('input', () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
        updateBrlToUsd()
    }, delay)
})

usdInput.addEventListener('input', () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
        updateUsdToBrl()
    }, delay)
})

const usdElement = document.querySelector('.usd')
const brlElement = document.querySelector('.brl')

usdElement.addEventListener('mouseenter', () => {
    usdElement.classList.add('hover')
    brlElement.classList.add('hover')
    usdInput.focus()
})

usdElement.addEventListener('mouseleave', () => {
    usdElement.classList.remove('hover')
    brlElement.classList.remove('hover')
})

brlElement.addEventListener('mouseenter', () => {
    usdElement.classList.add('hover')
    brlElement.classList.add('hover')
    brlInput.focus()
})

brlElement.addEventListener('mouseleave', () => {
    usdElement.classList.remove('hover')
    brlElement.classList.remove('hover')
})