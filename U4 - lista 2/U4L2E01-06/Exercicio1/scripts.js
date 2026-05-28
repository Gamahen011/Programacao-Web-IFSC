var mensagem = ""

function atualizar() {
var resultado = ""

var select = (document.getElementById("metodo"));
console.log(select.value);
var metodo = Number(select.value);

switch (metodo) {
    case 1:
        resultado = "débito";
        break;
    case 2:
        resultado = "crédito";
        break;
    case 3:
        resultado = "dinheiro";
        break;
    default: 
        resultado = "invalido"
}

if (mensagem) {
    let div = document.getElementById("resultados");
    let remover = div.firstChild;
    remover.remove();
}

let div = document.getElementById("resultados");
mensagem = document.createElement('p');

if (resultado != "invalido") {
    mensagem.textContent = `Será pago em: ${resultado}`; 
} else {
    mensagem.textContent = "Escolha uma das opções";
};
div.appendChild(mensagem);
}