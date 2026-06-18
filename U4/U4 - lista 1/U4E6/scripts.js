var mensagem = ""

function atualizar() {
var resultado = ""

var input1 = (document.getElementById("nota1"));
var nota1 = Number(input1.value);
var input2 = (document.getElementById("nota2"));
var nota2 = Number(input2.value);
media = ((nota1 + nota2) / 2)

if (media >= 0 && media < 7) {
    resultado = "Reprovado";
} else if (media >= 0 && media < 10){
    resultado = "Aprovado";
} else if (media >= 0 && media == 10) {
    resultado = "Aprovado com Distinção"
} else {
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
    mensagem.textContent = `${resultado}`; 
} else {
    mensagem.textContent = "Digite notas válidas!";
};
div.appendChild(mensagem);
}