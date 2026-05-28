var mensagem = ""

function atualizar() {
var resultado = ""

var input = (document.getElementById("idade"));
var idade = Number(input.value);

switch (true) {
    case (idade >= 0 && idade <= 12):
        resultado = "crianca";
        break;
    case (idade >= 13 && idade <= 17):
        resultado = "adolescente";
        break;
    case (idade >= 18 && idade <= 59):
        resultado = "adulto";
        break;
    case (idade >= 60):
        resultado = "idoso";
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
    mensagem.textContent = `Você é ${resultado}`; 
} else {
    mensagem.textContent = "Digite uma idade válida";
};
div.appendChild(mensagem);
}