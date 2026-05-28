var mensagem = ""

function atualizar() {

var input = document.getElementById("numero");
var numero = input.value;


if (numero < 0) {
    var resultado = "negativo"
} else {
    var resultado = "positivo"
}

if (mensagem) {
    let div = document.getElementById("resultados");
    let remover = div.firstChild;
    remover.remove();
}

let div = document.getElementById("resultados");
mensagem = document.createElement('p');
mensagem.textContent = `O número é ${resultado}`;
div.appendChild(mensagem);
}