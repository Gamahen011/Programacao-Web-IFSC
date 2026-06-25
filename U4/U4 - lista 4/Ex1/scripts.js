var div = document.getElementById("resultados");

function atualizar() {
    if (div.firstChild !== null) {
        inputs = []
        while (div.firstChild !== null) {
                div.removeChild(div.firstChild);
        }
    }
    criarInputs(3);
}

function criarInputs(valor) {
    let inputs = []
    for (let i = 0; i < valor; i++) {
        input = document.createElement("input");
        input.type = "number";
        input.placeholder = "Digite a nota";
        input.value = 0
        div.appendChild(input);
        inputs.push(input);
    };
    let botao = document.createElement("button");
    botao.style.width = "4vw";
    botao.style.height = "2vw";
    div.appendChild(botao);
    botao.addEventListener("click", () => calcularMedia(inputs));
}

function calcularMedia(inputs) {
    let notas = [];

    inputs.forEach (input => {
        notas.push(parseInt(input.value))
    });

    let soma = 0;
    notas.forEach (function (nota) {
        soma += nota
    });

    adicionar(`A média das notas é: ${soma/3}`);
}

function adicionar(mensagem) {
    if (mensagem) {
        let p = document.createElement("p");
        div.appendChild(p);
        p.textContent = mensagem;
    }
}


