const sideBarButton = document.querySelector('#open-nav')
const sideBar = document.querySelector('#side-bar')
const button = document.querySelector('#open-nav > button')
const listItens = document.querySelectorAll('ul > li')
const logOutButton = document.querySelector('#logout > a')
const logOutModal = document.querySelector('#modal-logout')
const confirmationButtons = document.querySelectorAll('#confirmation > i')


logOutButton.addEventListener('click', openModal)


function openModal() {
    if(sideBar.classList.contains('off') && logOutModal.classList.contains('on')){
        logOutModal.classList.remove('on')
    }
}


sideBarButton.addEventListener('click', () => {
    sideBar.classList.toggle("off")

    if(button.textContent == '>'){
        button.textContent = "<"
    }else{
        button.textContent = ">"
    }

})


listItens.forEach(item =>{
    item.addEventListener('click', () => {
        listItens.forEach(item => item.classList.remove('active'))
        item.classList.add('active')
    })
})




