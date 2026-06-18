var notas = [];
var inputs = [];
var div = document.getElementById("resultados");

function atualizar() {

    if (div.firstChild !== null) {
        while (div.firstChild !== null) {
            div.removeChild(div.firstChild);
        }
    }
    mensagem = '';
    var input = (document.getElementById("valor"));
    var valor = Number(input.value);
    criarInputs(valor);
}

function atualizar2() {
    if (notas.length < valor) {
        notas = [];
        for (let i of inputs) {
            notas.push(Number(i.value));
        }
    } else if  (notas.length == valor) {
        var mensagem = document.createElement('p');
        mensagem.textContent = calcularMedia(notas);
        div.appendChild(mensagem);
    }
}

function criarInputs(valor) {
    inputs = [];
    for (let i = 0; i < valor; i++) {
        var input = document.createElement("input");
        input.type = "number";
        input.placeholder = "Digite o número";
        div.appendChild(input);
        inputs.push(input);
    }
    var button = document.createElement('button');
    button.textContent = 'Calcular Média';
    button.onclick = function() {
        atualizar2();
    };
    div.appendChild(button);
}

function calcularMedia(notas) {
    var soma = 0;
    for (let i of notas) {
        soma += i;
    }
    var media = soma / notas.length;
    return media; 
}
