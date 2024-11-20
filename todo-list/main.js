const input = document.querySelector('#toDo')
const button = document.querySelector('#btn')

button.addEventListener('click', () => addToList(input.value))

function addToList(item){
    const listItem = document.createElement('li')
    const content = `
    <p>
        <i class="fa-solid fa-check hidden"></i>
        ${item}
    </p> 

    <span class="close">x</span>
    `
    listItem.innerHTML = content

    document.querySelector('#list').append(listItem)

    listFunctions(listItem)
}

function listFunctions(listItem){
    listItem.addEventListener('click', (e) => {
        let matchesXbutton = e.target.matches('span.close')
        if(matchesXbutton){
            removeFromList(listItem)
            return
        }

        listItem.classList.toggle('select')

        const icon = listItem.querySelector('i.fa-check')
        if(icon){
            icon.classList.toggle('hidden')
        }
    })

}

function removeFromList(listItem){
    const canDelete = confirm('Você tem certeza que deseja remover ?')

    if(canDelete){
        listItem.remove()
    }
}