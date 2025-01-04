const brlInput = document.querySelector('.brl input')
const usdInput = document.querySelector('.usd input')

const fetchCurrency = async () => {
    if(containsLetters()){
        alert('[ERRO] Não é possível converter letras, tente novamente com números')
        usdInput.value = 0
        brlInput.value = 0
        return
    }

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
    
    usdInput.value = DEFAULT_USD_VALUE
    brlInput.value = brlValue.toFixed(2)
}

export const updateBrlToUsd = async () => {
    const data = await fetchCurrency()
    const usdValue = Number(data.BRLUSD.bid)
    const brlInputValue = Number(brlInput.value)
    usdInput.value = (brlInputValue * usdValue).toFixed(2)
}

export const updateUsdToBrl = async () => {
    const data = await fetchCurrency()
    const usdValue = Number(data.BRLUSD.bid)

    const usdInputValue = Number(usdInput.value)
    brlInput.value = (usdInputValue / usdValue).toFixed(2)
}


function containsLetters(){
    let charset = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o', 'p','q','r','s','t','u','v','w','x','y','z']
    for(let i = 0; i < charset.length; i++){
        if(brlInput.value.includes(charset[i])){
            return true
        }
        if(usdInput.value.includes(charset[i])){
            return true
        }   
    }
}