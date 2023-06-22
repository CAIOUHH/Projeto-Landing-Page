var SetaDireita = document.getElementById("setadireita")
var Leo = window.document.getElementById("Leo")
var Sam = window.document.getElementById("Sam")
var Bruna = window.document.getElementById("Bruna")
var SetaEsquerda = window.document.getElementById("setaesquerda")

function RolarParaDireita() {
    Leo.style = "display:none"
    Bruna.style = "display:flex"
    SetaDireita.style = "display:none"
    SetaEsquerda.style = "display:flex ; margin-top: 55px ;"
}

function RolarParaEsquerda() {
    Leo.style = "display:flex"
    Bruna.style = "display:none"
    SetaDireita.style = "display:flex ; margin-top: 55px"
    SetaEsquerda.style = "display:none"
}