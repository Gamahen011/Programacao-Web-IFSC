var mensagem = ""

function atualizar() {
var resultado = ""

var input = (document.getElementById("mes"));
var mes = Number(input.value);

switch (mes) {
    case 1:
        resultado = "janeiro";
        break;
    case 2:
        resultado = "fevereiro";
        break;
    case 3:
        resultado = "março";
        break;
    case 4:
        resultado = "abril";
        break;
    case 5:
        resultado = "maio";
        break;
    case 6:
        resultado = "junho";
        break;
    case 7:
        resultado = "julho";
        break;
    case 8:
        resultado = "agosto";
        break;
    case 9:
        resultado = "setembro";
        break;
    case 10:
        resultado = "outubro";
        break;
    case 11:
        resultado = "novembro";
        break;
    case 12:
        resultado = "dezembro";
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
    mensagem.textContent = `Mês: ${resultado}`; 
} else {
    mensagem.textContent = "Digite um número válido";
};
div.appendChild(mensagem);
}