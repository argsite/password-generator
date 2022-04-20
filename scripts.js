const qtdeCharRange = document.querySelector('#qtdeCharRange')
const qtdeCharNumber = document.querySelector('#qtdeCharNumber')
const form = document.querySelector('#passwordGeneratorForm')
const incluirUppercaseElemento = document.querySelector('#incluirUppercase')
const incluirNumerosElemento = document.querySelector('#incluirNumeros')
const incluirSimbolosElemento = document.querySelector('#incluirSimbolos')
const passwordDisplay = document.querySelector('#passwordDisplay')

const LowerCase_Char_Codes = arrayDoMenorProMaior(97, 122)
const UpperCase_Char_Codes = arrayDoMenorProMaior(65, 90)
const Number_Char_Codes = arrayDoMenorProMaior(48, 57)
const Symbol_Char_Codes = arrayDoMenorProMaior(33, 47).concat(arrayDoMenorProMaior(58, 64)).concat(arrayDoMenorProMaior(91, 96)).concat(arrayDoMenorProMaior(123, 126))


qtdeCharRange.addEventListener('input', sincroQtde)
qtdeCharNumber.addEventListener('input', sincroQtde )

form.addEventListener('submit', function(e) {
    e.preventDefault()
    const qtdeChar = qtdeCharNumber.value
    const incluirUppercase = incluirUppercaseElemento.checked
    const incluirNumeros = incluirNumerosElemento.checked
    const incluirSimbolos = incluirSimbolosElemento.checked
    const password = generatePassword(qtdeChar, incluirNumeros, incluirUppercase, incluirSimbolos)
    passwordDisplay.innerText = password
    mensagem.classList.remove('ativo')
} )


function generatePassword(qtdeChar, incluirNumeros, incluirUppercase, incluirSimbolos){
    let charCodes = LowerCase_Char_Codes
    if(incluirUppercase) charCodes = charCodes.concat(UpperCase_Char_Codes)
    if(incluirNumeros) charCodes = charCodes.concat(Number_Char_Codes)
    if(incluirSimbolos) charCodes = charCodes.concat(Symbol_Char_Codes)

    const passwordCharacters = []
    for(let i = 0; i < qtdeChar; i++){
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(characterCode))
    }
        return passwordCharacters.join('')
}

function arrayDoMenorProMaior(menor, maior){
    const array = []
    for(let i = menor; i <= maior; i++){
        array.push(i)
    }
    return array
}

function sincroQtde(e){
    const value = e.target.value
    qtdeCharRange.value = value
    qtdeCharNumber.value = value
    }

    
    const botaoCopiar = document.querySelector('#botaoCopiar')
    const mensagem = document.querySelector('.mensagem')
   
    function copiar() {
        let textoCopiado = document.getElementById('passwordDisplay').textContent
        
        if(textoCopiado.length){
        navigator.clipboard.writeText(textoCopiado)
        mensagem.classList.add('ativo')
        }   
    }
    

    botaoCopiar.addEventListener('click', copiar)