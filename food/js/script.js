import reveal from './scroll.js'

const burguer = document.querySelector('.fa-bars')
const close = document.querySelector('.burguer-close')
const navTag = document.querySelector('nav')
const sections = document.querySelectorAll('section');
const links = document.querySelectorAll('header ul li > a');

burguer.addEventListener('click', openNavigationMenu)
close.addEventListener('click', closeNavigationMenu)


reveal()


window.addEventListener('scroll', scrollNavitation)



function openNavigationMenu(){
    navTag.classList.add('mobile-open')

    close.style.display = 'block'
    burguer.style.display = 'none'
}

function closeNavigationMenu(){
    navTag.classList.remove('mobile-open')
    
    close.style.display = 'none'
    burguer.style.display = 'block'
}

function scrollNavitation(){
    let scrollPosition = window.scrollY + 250;
    sections.forEach(section => {
        if (scrollPosition >= section.offsetTop) {
            links.forEach(link =>{
                link.classList.remove('selected')
                if (section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                    link.classList.add('selected');
                }
            })
        }
    });
}