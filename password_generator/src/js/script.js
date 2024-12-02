const btn = document.querySelector('button')
const charInput = document.querySelector('#quantity')
const displayPassword = document.querySelector('#password')
const copySvg = document.querySelector('i')
const passwordContainer = document.querySelector('#password-container')

btn.addEventListener('click', () => {
    //deixa oculto o container
    passwordContainer.classList.add('hidden')

    //pega o tamanho da senha
    const size = getPasswordSize()
    addTypes()

    //se não foi selecionada nenhuma checkbox, erro
    if(!hasType){
        message('[ERRO] Nenhum tipo de caractere selecionado')
        return
    }

    //se retornar tamanho, vai mostrar na tela
    if(size){
        generatePassword(charTypes,size)
        passwordContainer.classList.remove('hidden')
        displayPassword.innerHTML = password
    }
})

// vai copiar para a area de transferencia
copySvg.addEventListener('click', copyToClipBoard)

let charTypes = []
let password = ''
let hasType = false

function addTypes(){
    const lowerCase = document.querySelector('#inc-lowerCase').checked
    const upperCase = document.querySelector('#inc-upperCase').checked
    const specialCharacters = document.querySelector('#inc-special').checked
    const numbers = document.querySelector('#inc-number').checked


    //variavel para verificar se tem checkbox selecionada
    hasType = false
    charTypes = []


    //adiciona os caracteres em um array
    if(lowerCase){
        charTypes.push('abcdefghijklmnopqrstuvwxyz')
        hasType = true
    }

    if(upperCase){
        charTypes.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
        hasType = true
    }

    if(specialCharacters){
        charTypes.push('!#$%&\()*+-/:;?@\^_~')
        hasType = true
    }
    if(numbers){
        charTypes.push('1234567890')
        hasType = true
    }

    //separa todas as letras do array
    charTypes = charTypes.join('')
}

function getPasswordSize(){
    const size = charInput.value

    //se o tamanho da senha for menor ou igual a 0, ou se o tamanhoo for maior que 150, erro
    if(size <= 0 || size >= 150){
        message('[ERRO] Tamanho de senha invalido!')

        //se der erro vai retornar null, então (!size) no if lá em cima
        return null
    }
    //retorna o size
    return size
}

function generatePassword(charTypes,size){
    //reinicia a senha toda vez que a função for chamada
    password = ''

    //cria uma senha nova 
    //enquando o size for maior que o I, i + 1
    for(let i = 0; i < size; i++){
        // Math.floor() arredonda para baixo para garantir um índice válido
        // Math.random() gera um número aleatório entre 0 e 1
        // com isso vai multiplicar pela quantidade de caracteres selecionados e vai gerar um indice aleatorio do array
        const randomChar = charTypes[Math.floor(Math.random() * charTypes.length)];

        //vai concatenando os valores aleatorios obtidos dos indices 
        password += randomChar
    }
}

function copyToClipBoard(){
    const text = document.querySelector('#password')

    //se tiver vazio, retorna da função
    if(text.textContent == '') return

    //copia para a area de transferencia
    navigator.clipboard.writeText(text.textContent);
    message("Senha copiada para a área de transferência!", 'success')
}

function message(str, er){
    //meensagem de erro com a lib toastify
    Toastify({
        text: str,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            //se o 2 parametro da função for igual a success, ele fica verde, senão vermelho
          background: er == 'success'? "#84cc16": "#e11d48",
          boxShadow: "none",
        },
        onClick: function(){} // Callback after click
      }).showToast();
}

