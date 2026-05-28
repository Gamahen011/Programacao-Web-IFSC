var mensagem = ""

function atualizar() {
var resultado = ""

var input = (document.getElementById("nota"));
var nota = Number(input.value);

switch (nota) {
    case 9:
    case 10:
        resultado = "A";
        break;
    case 7:
    case 8:
        resultado = "B";
        break;
    case 6:
    case 5:
        resultado = "C";
        break;
    case 4:
    case 3:
        resultado = "D";
        break;
    case 2:
    case 1:
    case 0:
        resultado = "F";
        break;
    default:
        resultado = "invalido";    
}

if (mensagem) {
    let div = document.getElementById("resultados");
    let remover = div.firstChild;
    remover.remove();
}

let div = document.getElementById("resultados");
mensagem = document.createElement('p');

if (resultado != "invalido") {
    mensagem.textContent = `Classificação: ${resultado}`; 
} else {
    mensagem.textContent = "Digite uma nota válida";
};
div.appendChild(mensagem);
}