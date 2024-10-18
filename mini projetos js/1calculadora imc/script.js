const btn = document.querySelector('#btn')

btn.addEventListener('click', imc)

function imc(){
    const name = document.querySelector('#name').value
    const height = document.querySelector('#height').value
    const weight = document.querySelector('#weight').value
    const result = document.querySelector('#res')
        
    if(name == '' || height == '' || weight == ''){
        result.textContent = '[ERRO] Preencha todos os campos'
        return
    }
    
    const calcImc = (weight / (height * height))
    let classificação;

    { //Não gostei desses if elses, tive que por em um escopokkkk, mas tá identico ao do video
        if(calcImc < 18.5){
            classificação = 'Abaixo do peso'
        }else if(calcImc < 25){
            classificação = 'com peso ideal. Parabéns!'
        }else if(calcImc < 30){
            classificação = 'Levemente acima do peso.'
        }else if(calcImc < 35){
            classificação = 'obesidade grau I'
        }else if(calcImc < 40){
            classificação = 'obesidade grau II'
        }else if(calcImc > 40){
            classificação = 'obesidade grau III. Cuidado!   '
        }
    }

    result.textContent = `${name} seu IMC é de ${calcImc.toFixed(1)} e você está ${classificação}`

}