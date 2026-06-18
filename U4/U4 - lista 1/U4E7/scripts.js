var mensagem = ""

function atualizar() {
var resultado = ""

var inputnome = (document.getElementById("nome"));
var nome = inputnome.value
var input1 = (document.getElementById("nota1"));
var nota1 = Number(input1.value);
var input2 = (document.getElementById("nota2"));
var nota2 = Number(input2.value);
var input3 = (document.getElementById("nota3"));
var nota3 = Number(input3.value);

media = ((nota1 + nota2 + nota3) / 3)

if (media >= 0 && media < 7) {
    resultado = "reprovado";
} else if (media >= 0 && media < 10){
    resultado = "aprovado";
} else if (media >= 0 && media == 10) {
    resultado = "aprovado com Distinção"
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
    mensagem.textContent = `${nome} foi ${resultado} com média ${media}`; 
} else {
    mensagem.textContent = "Digite notas válidas!";
};
div.appendChild(mensagem);
}