const input = document.querySelector('#toDo')
const addItemBtn = document.querySelector('#btn')
const listContainer = document.querySelector('#list')
const clearBtn = document.querySelector('#clear-btn')

addItemBtn.addEventListener('click', () => addToList(input.value))
clearBtn.addEventListener('click', () => clearAllItens())

window.addEventListener('keypress', (e) => {
    //se o input não tá selecionado, seleciona
    if(!input.focus() && e.key == 'Enter'){
        input.focus()
    }

    //se o espaço for clicado, clica o botão
    if(e.key == 'Enter' && input.value != ''){
        addToList(input.value)
    }
})


function saveData(){
    //coloca todos itens da lista no localStorage
    localStorage.setItem("data", listContainer.innerHTML)
}

function showData(){
    const savedData = localStorage.getItem('data')

    //checa se existe data
    if(savedData){
    //coloca os itens salvos na tela
    listContainer.innerHTML = savedData
    
    //adiciona funções aos itens que já existem
    const listItem = document.querySelectorAll('li')
    listItem.forEach(item => {
        listFunctions(item)
        })
    }
}

window.onload = showData()


function addToList(item){
    //checa se existe algum valor igual
    if(valueExists(item)){
        alert('Esse item já existe')
        return
    }

    //checa se o valor do item é vazio ou tem somente espaços
    if(item.trim() == ''){
        window.alert('Adicione um item na lista')
        return
    }

    //limpa o input e deixa focado
    input.value = ''
    input.focus()


    //cria um novo li e adiciona o parametro da função no paragrafo
    const newListItem = document.createElement('li')
    const content = `
    <p>
    <i class="fa-solid fa-check hidden"></i>
    ${item}
    </p> 
    <span class="close">x</span>
    `

    //coloca o content no novo li
    newListItem.innerHTML = content

    //adiciona o novo li no html 
    document.querySelector('#list').append(newListItem)   

    //adiciona as funções para o novo li
    listFunctions(newListItem)

    //salva a data
    saveData()
}   

function removeFromList(listItem){
    const canDelete = confirm('Você tem certeza que deseja remover ?')

    //se confirmar, apague
    if(canDelete){
        listItem.remove()
        saveData()
    }
}

function valueExists(item) {

    const list = document.querySelectorAll('#list li');

    //checa todos li's, se tiver outro li com o texContent do proximo item a ser adicionado, retorna true
    for (let i = 0; i < list.length; i++) {
        const valueExists = list[i].querySelector('p').textContent.trim().toLowerCase() === item.trim().toLowerCase()
        if (valueExists) {
            return true; 
        }
    }
    return false; 
}


function listFunctions(item){
    //quando clicar em um li, evento de clique
    item.addEventListener('click', (e) => {
        const icon = item.querySelector('i.fa-check')
        const matchesXbutton = e.target.matches('span.close')
        
        //se clicar no botão X, remove item da lista
        if(matchesXbutton){
            removeFromList(item)
            return
        }
        //senão for clicado no X, o item vai ser selecionado
        item.classList.toggle('select')
        icon.classList.toggle('hidden')
        saveData()
    })
}


function clearAllItens(){
    const listItem = document.querySelectorAll('li')

    //confirmação 
    const confirmClear = confirm('você tem certeza que quer apagar todos os itens da lista?')
    
    //se sim vai remover todos itens da lista
    if(confirmClear){
        listItem.forEach(item =>{
            item.remove()
        })
    }
    saveData()
}