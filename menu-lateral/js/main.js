const sideBarButton = document.querySelector('#open-nav')
const sideBar = document.querySelector('#side-bar')
const button = document.querySelector('#open-nav > button')
const listItens = document.querySelectorAll('#side-item')
const logOutButton = document.querySelector('#logout > a')
const logOutModal = document.querySelector('#modal-logout')
const confirmationButtons = document.querySelectorAll('#confirmation > i')



logOutButton.addEventListener('click', openModal)


function openModal() {
    if(sideBar.classList.contains('off')){
        sideBar.classList.replace('off', 'on')
        logOutModal.classList.replace('off', 'on')
    }else{
        logOutModal.classList.replace('off', 'on')
    }
    
    sideBarButton.addEventListener('click', () => {
        if(sideBar.classList.contains('off') && logOutModal.classList.contains('on')){
            logOutModal.classList.replace('on', 'off')
        }
    })
}

confirmationButtons.forEach(btn => 
    btn.addEventListener('click', (event) => {
        let target = event.target.id
        if(target == 'yes'){
            window.location.reload()
        }else{
            logOutModal.classList.replace('on', 'off')
        }
    })
)

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