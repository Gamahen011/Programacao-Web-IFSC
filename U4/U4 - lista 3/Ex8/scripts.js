var div = document.getElementById("resultados");
var inputs = [];
var input = "";
var qntglobal = 0

function atualizar() {

    let qnt = parseInt(prompt("Quantas cidades deseja registrar: "));
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
        notas.push(input.value)
    });

    notas.forEach (function (nota, indice) {
        switch (indice) {
            case 0:
                adicionar(nota);
                break;
            case (qntglobal-1):
                adicionar(nota)
                break;
        }
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
        input.type = "text";
        input.placeholder = "Digite a cidade";
        input.value = ""
        div.appendChild(input);
        inputs.push(input);
    }
}
