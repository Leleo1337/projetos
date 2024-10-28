const btn = document.querySelector('#mode')
const moon = document.querySelector('.ph-bold.ph-moon')
const sun = document.querySelector('.ph-bold.ph-sun')
const htmlElement = document.documentElement

btn.addEventListener('click', mode)

function mode(){
    htmlElement.classList.toggle('light')
    toggleIcon()
}

function toggleIcon(){
    if(htmlElement.classList.contains('light')){
        moon.style.display = 'block'
        sun.style.display = 'none'
    }else{
        moon.style.display = 'none'
        sun.style.display = 'block'
    }
}