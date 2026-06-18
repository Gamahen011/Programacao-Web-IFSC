var div = document.getElementById("resultados");
var inputs = [];
var input = "";
var qntglobal = 0

function atualizar() {

    let qnt = parseInt(prompt("Quantas notas deseja registrar: "));
    qntglobal = qnt
    
    if (div.firstChild !== null) {
        inputs = []
        while (div.firstChild !== null) {
                div.removeChild(div.firstChild);
        }
    }

    criarInputs(qnt);
    let botao = document.createElement("button");
    botao.style.width = "4vw";
    botao.style.height = "2vw";
    div.appendChild(botao);
    botao.addEventListener("click", atualizar2)

}

function atualizar2() {
    let notas = [];

    inputs.forEach (input => {
        notas.push(parseInt(input.value))
    });

    let maior = 0;
    let soma = 0
    let menor = "";


    notas.forEach (function (nota, indice) {
        if (nota > maior) {
            maior = nota
        };
        if (nota < menor || menor == "") {
            menor = nota
        };
        soma += nota
    });

    adicionar(`A menor nota é: ${menor}`);
    adicionar(`A maior nota é: ${maior}`);
    adicionar(`A média das notas é: ${soma/qntglobal}`);
}

function adicionar(mensagem) {
    if (mensagem) {
        let p = document.createElement("p");
        div.appendChild(p);
        p.textContent = mensagem;
    }
}

function criarInputs(valor) {
    for (let i = 0; i < valor; i++) {
        input = document.createElement("input");
        input.type = "number";
        input.placeholder = "Digite a nota";
        input.value = ""
        div.appendChild(input);
        inputs.push(input);
    }
}
