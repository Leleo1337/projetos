const brl_input = document.querySelector('.brl input')
const usd_input = document.querySelector('.usd input')

const fetchCurrency = async () => {
    const api = `https://economia.awesomeapi.com.br/last/USD-BRL,BRL-USD`
    const apiResponse = await fetch(api)
    if (apiResponse.ok) {
        const data = await apiResponse.json()
        return data
    }
    alert('[ERRO] Erro no servidor, tente novamente mais tarde')
}

export const updateDisplay = async () => {
    const data = await fetchCurrency()
    const brlValue = Number(data.USDBRL.bid)

    const DEFAULT_USD_VALUE = 1
    
    usd_input.value = DEFAULT_USD_VALUE
    brl_input.value = brlValue.toFixed(2)
}

export const updateBrlToUsd = async () => {
    const data = await fetchCurrency()
    const usdValue = Number(data.BRLUSD.bid)
    const brlInputValue = Number(brl_input.value)
    usd_input.value = (brlInputValue * usdValue).toFixed(2)
}

export const updateUsdToBrl = async () => {
    const data = await fetchCurrency()
    const usdValue = Number(data.BRLUSD.bid)

    const usdInputValue = Number(usd_input.value)
    brl_input.value = (usdInputValue / usdValue).toFixed(2)
}