import { updateDisplay } from "./fetchCorrency.js";

const brl_input = document.querySelector('.brl input')
const usd_input = document.querySelector('.usd input')

updateDisplay()
window.setInterval(updateDisplay, 5000)

brl_input.addEventListener('input', () => updateInputWidth(brl_input))
usd_input.addEventListener('input', () => updateInputWidth(usd_input))

function updateInputWidth(input){
    const textLength = input.value.length;
    let newWidth = Math.max(35 * textLength);
    if(newWidth > 600){
        newWidth = 600
    }
    input.style.width = `${newWidth}px`;
}

async function resetInputWidth() {
    await updateDisplay()
    
    updateInputWidth(brl_input)
    updateInputWidth(usd_input)
}
resetInputWidth()

window.setInterval(() => {
    resetInputWidth() 
}, 5000)

