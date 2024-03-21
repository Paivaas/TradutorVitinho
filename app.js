'use strict'

const fundo = document.getElementById('fundo')
const DiaNoite = document.getElementById('MudarImagem')
let mudar = false

const mudartema = function(){
    if (mudar == false) {
        mudar = true
        DiaNoite.src = './img/lua.png'
        fundo.style.backgroundColor = ' rgb(37, 37, 37)'
    } else {
        mudar = false
        DiaNoite.src = './img/sol.png'
        fundo.style.backgroundColor = 'rgb(255, 255, 255)'
    }
}


DiaNoite.addEventListener('click', mudartema)




// DiaNoite.addEventListener('click', () => {
//     const DiaNoite = document.getElementById('MudarImagem')
//     DiaNoite.src = './img/lua.png'
//     fundo.classList.toggle('preto')
// })