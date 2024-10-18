import { slide } from "./slide.js";

const previous = document.querySelector('#previous')
const next = document.querySelector('#next')

next.addEventListener('click', slide.next)
previous.addEventListener('click', slide.previous)

function autoSlide(){
    setInterval(slide.next, 4000)
}

autoSlide()
