var div = document.getElementById("resultados");
var inputs = [];
var input = "";

function atualizar() {

    let qnt = prompt("Quantas notas deseja registrar: ");
    
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
        notas.push(input.value)
    });

    notas.forEach (nota => {
        adicionar(nota);
    });
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
        input.value = 0
        div.appendChild(input);
        inputs.push(input);
    }
}
