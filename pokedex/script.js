const pokemonName = document.querySelector('.pokemon_name')
const pokemonNumber = document.querySelector('.pokemon_number')
const pokemonImage = document.querySelector('.pokemon_image')

const form = document.querySelector('form')
const input = document.querySelector('.input_search')

const btn_previous = document.querySelector('.btn-prev')
const btn_next = document.querySelector('.btn-next')

//variavel para o botão de previous e next
let searchPokemon = 1;

const fetchPokemon = async (pokemon) =>{
    //pesquisia o pokemon
    const apiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    //se o status da resposta for 200 (achou o pokemon), faz a data e retorna
    if(apiResponse.status == 200){
        const data = await apiResponse.json()
        return data
    }
    // se não tiver status 200 não retorna nada
}

const renderPokemon = async (pokemon) => {
    pokemonName.innerHTML = 'Loading ...'
    pokemonNumber.innerHTML = ''
    pokemonImage.style.display = 'none'
    
    //pesquisa o pokemon
    const data = await fetchPokemon(pokemon)    

    //se não retornar data 
    if(!data){
        pokemonNumber.innerHTML = 'Not found :c'
        pokemonName.innerHTML = ''
        return
    }

    // caminho do gif do pokemon (Fiz pra ficar mais legivel em baixo)
    const imagePath = data.sprites.versions["generation-v"]["black-white"].animated.front_default

    pokemonImage.style.display = 'block'
    pokemonImage.src = imagePath
    pokemonNumber.innerHTML = data.id
    pokemonName.innerHTML = data.name

    //o search pokemon recebe o id do pokemon pesquisado
    searchPokemon = data.id

    // se não tiver gif, vai usar uma imagem do pokemon
    if(imagePath == null){
        pokemonImage.src = data.sprites.front_default
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    //pega o valor do input, deixa em minusculo e remove espaços
    const inputValue = input.value.toLowerCase().trim()

    //pesquisa o pokemon do input
    renderPokemon(inputValue)
    input.value = ''
    input.focus()
})

btn_previous.addEventListener('click', () => {
    searchPokemon--
    if(searchPokemon <= 1){
        //não deixa sair pro 0
        searchPokemon = 1
    }
    renderPokemon(searchPokemon)
})

btn_next.addEventListener('click', () => {
    searchPokemon++
    if(searchPokemon >= 1009){
        //não deixa sair pra cima de 1009 (não existe mais pokemon que isso)
        searchPokemon = 1009
    }
    renderPokemon(searchPokemon)
})

// vai renderizar o pokemon '1' por padrão
renderPokemon(searchPokemon)