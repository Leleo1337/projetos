const brl_input = document.querySelector('.brl input')
const usd_input = document.querySelector('.usd input')

const fetchCorrency = async () =>{
    const api = `https://economia.awesomeapi.com.br/last/USD-BRL,BRL-USD`
    const apiResponse = await fetch(api)
    if(apiResponse.ok){
        const data = await apiResponse.json()
        return data
    }
    alert('[ERRO] Erro no servidor, tente novamente mais tarde')
}

export const updateDisplay = async () => {
    const data = await fetchCorrency()
    const brlValue = Number(data.USDBRL.bid).toFixed(2)
    const usdValue = Number(data.BRLUSD.bid).toFixed(2)

    usd_input.value *= brlValue
    brl_input.value *= usdValue

    console.log(brl_input,usd_input)
}
