const cityInput = document.querySelector('#city-input')
const btn = document.querySelector('#btn')

const cityNameElement = document.querySelector("#city-name")
const dateElement = document.querySelector("#date")
const weatherIconElement = document.querySelector("#weather-icon")
const skyStateElement = document.querySelector("#sky-state")
const temperatureElement = document.querySelector('#temperature')
const container = document.querySelector('#weather-info')
const windSpeedElement = document.querySelector("#wind-speed")

const currentDate = new Date();

btn.addEventListener('click', () => {
    const city = cityInput.value
    searchWeather(city)
})


async function searchWeather(city){
    const api_key = '20e0fc032e9a39883363c5fe4b80bd7e'
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;

    try{
        //pesquisa na api
        const response = await fetch(api)


        if(!response.ok){
            throw new Error('deu erro zé')
        }
        //transforma os dados da api em um json 
        const data = await response.json()
        
        const timezoneOffset = data.timezone;
        const localTime = getLocalTime(timezoneOffset);
        
        const icon = data.weather[0].icon
        
        //troca os dados dos elementos
        cityNameElement.textContent = `${data.name}, ${data.sys.country}`
        dateElement.textContent = localTime
        weatherIconElement.src = `https://openweathermap.org/img/wn/${icon}.png`
        temperatureElement.textContent = `${data.main.temp.toFixed(1)}°C`
        skyStateElement.textContent = `${data.weather[0].description}`
        windSpeedElement.textContent = `Wind speed: ${data.wind.speed}mph`

        //aparece o container
        container.classList.remove('hidden')


        //tira a borda da section de cima 
        document.querySelector('#weather-search').style = `border-bottom-left-radius: 0px;
                                                            border-bottom-right-radius: 0px;`

    }catch(error){
        alert('Erro ao buscar Cidade. Tente novamente')
        container.classList.add('hidden')
    }  
}


function getLocalTime(timezoneOffset) {
    //não faço ideia como faz isso, mas funciona (peguei do google)
    const now = new Date();
    const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
    const localTime = new Date(utcTime + timezoneOffset * 1000);

    return localTime.toLocaleString();
}

