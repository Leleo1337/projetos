const pokemonName = document.querySelector('.pokemon_name')
const pokemonNumber = document.querySelector('.pokemon_number')
const pokemonImage = document.querySelector('.pokemon_image')

const form = document.querySelector('form')
const input = document.querySelector('.input_search')

const btn_previous = document.querySelector('.btn-prev')
const btn_next = document.querySelector('.btn-next')

let searchPokemon = 1;

const fetchPokemon = async (pokemon) =>{
    const apiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    if(apiResponse.status == 200){
        const data = await apiResponse.json()
        return data
    }
}

const renderPokemon = async (pokemon) => {
    pokemonName.innerHTML = 'Loading ...'
    pokemonNumber.innerHTML = ''

    const data = await fetchPokemon(pokemon)    

    if(!data){
        pokemonImage.style.display = 'none'
        pokemonNumber.innerHTML = 'Not found :c'
        pokemonName.innerHTML = ''
        return
    }
    const imagePath = data.sprites.versions["generation-v"]["black-white"].animated.front_default

    pokemonImage.style.display = 'block'
    pokemonImage.src = imagePath
    pokemonNumber.innerHTML = data.id
    pokemonName.innerHTML = data.name

    searchPokemon = data.id

    if(imagePath == null){
        pokemonImage.src = data.sprites.front_default
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const inputValue = input.value.toLowerCase().trim()

    renderPokemon(inputValue)
    input.value = ''
    input.focus()
})


btn_previous.addEventListener('click', () => {
    searchPokemon = searchPokemon - 1
    if(searchPokemon <= 1){
        searchPokemon = 1
    }
    renderPokemon(searchPokemon)
})
btn_next.addEventListener('click', () => {
    searchPokemon = searchPokemon + 1
    renderPokemon(searchPokemon)
})



renderPokemon(searchPokemon)