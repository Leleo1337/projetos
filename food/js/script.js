import reveal from './scroll.js'

const burguer = document.querySelector('.fa-bars')

reveal()


burguer.addEventListener('click', openNavigationMenu)

function openNavigationMenu(){
    console.log('cliquei')
}

console.log(burguer)