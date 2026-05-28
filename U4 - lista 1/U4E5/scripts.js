var mensagem = ""
var resultado = ""

function atualizar() {

var input = document.getElementById("senha");
var senha = input.value;

if (senha != "12345") {
    resultado = "invalido";
} else {
    resultado = "Acesso concedido";
};

if (mensagem) {
    let div = document.getElementById("resultados");
    let remover = div.firstChild;
    remover.remove();
}

let div = document.getElementById("resultados");
mensagem = document.createElement('p');

if (resultado != "invalido") {
    mensagem.textContent = `${resultado}`; 
} else {
    mensagem.textContent = "Senha incorreta";
};
div.appendChild(mensagem);
}