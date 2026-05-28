var mensagem = ""

function atualizar() {
var resultado = ""

var select = (document.getElementById("classificacao"));
console.log(select.value);
var metodo = Number(select.value);

switch (metodo) {
    case 1:
        resultado = "O conteúdo é livre para todos os públicos.";
        break;
    case 2:
        resultado = "O conteúdo é indicado para  maiores de 10 anos de idade.";
        break;
    case 3:
        resultado = "O conteúdo é indicado para  maiores de 12 anos de idade.";
        break;
    case 4:
        resultado = "O conteúdo é indicado para  maiores de 14 anos de idade.";
        break;
    case 5:
        resultado = "O conteúdo é indicado para  maiores de 16 anos de idade.";
        break;
    case 6:
        resultado = "O conteúdo é indicado para  maiores de 18 anos de idade.";
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
    mensagem.textContent = `${resultado}`; 
} else {
    mensagem.textContent = "Escolha uma das opções";
};
div.appendChild(mensagem);
}