var mensagem = ""

function atualizar() {
var resultado = ""

var input = (document.getElementById("fruta"));
var fruta = input.value.toUpperCase();

switch (fruta) {
    case "ABACATE":
        resultado = "Fruta cremosa, rica em gorduras boas, muito usada tanto em pratos doces quanto salgados.";
        break;
    case "ABACAXI":
        resultado = " Fruta tropical ácida e doce, excelente para sucos e sobremesas.";
        break;
    case "AÇAI":
        resultado = "Fruto amazônico de cor roxa escura, muito consumido no Brasil batido ou em cremes.";
        break;
    case "ACEROLA":
        resultado = "Fruta pequena e arredondada, famosa por ser uma das maiores fontes de vitamina C.";
        break;
    case "AMEIXA":
        resultado = "Fruta de casca lisa e polpa suculenta, pode ser consumida fresca ou seca.";
        break;
    case "AMORA":
        resultado = "Fruta pequena e escura, rica em antioxidantes, ótima para geleias.";
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
    mensagem.textContent = `Descrição: ${resultado}`; 
} else {
    mensagem.textContent = "Não sei nada sobre essa fruta";
};
div.appendChild(mensagem);
}