var mensagem = ""

function atualizar() {
var resultado = ""
var conceito = ""

var input1 = (document.getElementById("nota1"));
var nota1 = Number(input1.value);
var input2 = (document.getElementById("nota2"));
var nota2 = Number(input2.value);

media = ((nota1 + nota2) / 2)

if (media < 0) {
    resultado = "invalido"
} else if (media <= 4){
    resultado = "reprovado";
    conceito = "E"
} else if (media <= 6){
    resultado = "reprovado";
    conceito = "D"
} else if (media <= 6){
    resultado = "reprovado";
    conceito = "D"
} else if (media <= 7.5) {
    resultado = "aprovado";
    conceito = "C"
} else if (media <= 9) {
    resultado = "aprovado";
    conceito = "B"
} else if (media <= 10) {
    resultado = "aprovado";
    conceito = "C"
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
    mensagem.textContent = `Resultado: ${resultado} com média ${media}. As notas foram ${nota1} e ${nota2}, resultando em uma média de ${media}, conceito ${conceito}`; 
} else {
    mensagem.textContent = "Digite notas válidas!";
};
div.appendChild(mensagem);
}