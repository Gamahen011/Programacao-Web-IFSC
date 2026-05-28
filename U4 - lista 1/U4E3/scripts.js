var mensagem = ""
var resultado = ""

function atualizar() {

var input = document.getElementById("numero");
var idade = input.value;

if (idade < 0) {
    resultado = "invalido"
} else if (idade <= 12) {
    resultado = "criança"
} else if (idade <= 17) {
    resultado = "adolescente"
} else if (idade <= 59) {
    resultado = "adulto"
} else {
    resultado = "idoso"   
}

if (mensagem) {
    let div = document.getElementById("resultados");
    let remover = div.firstChild;
    remover.remove();
}

let div = document.getElementById("resultados");
mensagem = document.createElement('p');
if (resultado != "invalido") {
    mensagem.textContent = `Você é ${resultado}`; 
} else {
    mensagem.textContent = "Digite uma idade válida!"
}
div.appendChild(mensagem);
}