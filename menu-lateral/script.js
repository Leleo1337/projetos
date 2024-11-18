const sideBarButton = document.querySelector('#open-nav')
const sideBar = document.querySelector('#side-bar')
const button = document.querySelector('#open-nav > button')

sideBarButton.addEventListener('click', () => {
    sideBar.classList.toggle("off")
    if(button.textContent == '>'){
        button.textContent = "<"
    }else{
        button.textContent = ">"
    }
})


