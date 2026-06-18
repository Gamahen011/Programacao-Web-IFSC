var mensagem = ""
var resultado = ""

function atualizar() {

var input = document.getElementById("numero");
var valor = input.value;

if (valor < 0) {
    resultado = "invalido"
} else if (valor <= 100) {
    resultado = valor
} else {
    resultado = valor * 0.9
}

if (mensagem) {
    let div = document.getElementById("resultados");
    let remover = div.firstChild;
    remover.remove();
}

let div = document.getElementById("resultados");
mensagem = document.createElement('p');
if (resultado != "invalido") {
    mensagem.textContent = `O valor total ficou ${resultado}`; 
} else {
    mensagem.textContent = "Digite um valor válido!"
}
div.appendChild(mensagem);
}