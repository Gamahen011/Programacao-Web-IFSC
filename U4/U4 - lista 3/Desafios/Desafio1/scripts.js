var div = document.getElementById("resultados");
var casas = [["", "", ""], ["", "", ""], ["", "", ""]];
var jogador = 'X'

function atualizar() {
    casas = [["", "", ""], ["", "", ""], ["", "", ""]]
    jogador = 'X';

    if (div.firstChild !== null) {
        inputs = []
        while (div.firstChild !== null) {
                div.removeChild(div.firstChild);
        }
    }
    criarInputs()
}

function criarInputs() {
    for (let i = 0; i <= 2; i++) {
        for (let j = 0; j <= 2; j++) {
            input = document.createElement("input");
            input.type = "button";
            input.id = String(i) + String(j)
            input.value = casas[i][j]
            input.addEventListener("click", (evento) => {
                let alvo = evento.target
                let valor = jogador;
                mudarjogador();
                let posicao = alvo.id.split("")   
                mudarcasa(posicao, valor)
                alvo.value = casas[i][j]
            });
            div.appendChild(input);
        }
        br = document.createElement("br")
        div.appendChild(br)
    }
}

function mudarcasa(posicao, valor){
    const i = posicao[0];
    const j = posicao[1];
    if (casas[i][j] != "") {
        alert("Essa posição já foi usada!");
        return;
    }
    casas[i][j] = valor
}

function mudarjogador() {
    if (jogador == 'X') {
        jogador = "O"
        return "O"
    } else if (jogador == "O") {
        jogador = "X"
        return "X"
    }
}

function adicionar(mensagem) {
    if (mensagem) {
        let p = document.createElement("p");
        div.appendChild(p);
        p.textContent = mensagem;
    }
}

function verificarVitoria() {
    for (let i = 0; i < 3; i++) {
        if (
            valores[i][0] == jogador && valores[i][1] == jogador && valores[i][2] == jogador) {
            return true;
        }
    }

    for (let i = 0; i < 3; i++) {
        if (valores[0][i] == jogador && valores[1][i] == jogador && valores[2][i] == jogador) {
            return true;
        }
    }

    if (valores[0][0] == jogador && valores[1][1] == jogador && valores[2][2] == jogador) {
        return true;
    }

    if (valores[0][2] == jogador && valores[1][1] == jogador && valores[2][0] == jogador) {
        return true;
    }

    return false;
}