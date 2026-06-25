var div = document.getElementById("resultados");
var casas = [["", "", ""], ["", "", ""], ["", "", ""]];
var jogador = 'X';
var jogadorAtual = 'X'

function atualizar() {
    casas = [["", "", ""], ["", "", ""], ["", "", ""]]
    jogador = 'X';

    if (div.firstChild !== null) {
        inputs = []
        while (div.firstChild !== null) {
                div.removeChild(div.firstChild);
        }
    }
    let p = document.createElement("p");
    div.appendChild(p);
    p.textContent = `Vez de ${jogadorAtual}`

    criarInputs(p)
}

function criarInputs(p) {
    for (let i = 0; i <= 2; i++) {
        for (let j = 0; j <= 2; j++) {
            input = document.createElement("input");
            input.type = "button";
            input.id = String(i) + String(j)
            input.value = casas[i][j]
            input.addEventListener("click", (evento) => {
                if (jogadorAtual == "O") {
                    jogarAleatorio();
                    if (verificarVitoria()) {
                        adicionar(`Parabéns, o jogador ${jogadorAtual} venceu. Reinicie para continuar`)
                    };
                    mudarjogador();
                    p.textContent = `Vez de ${jogadorAtual}`;
                    return
                };
                let alvo = evento.target;
                let valor = jogadorAtual;
                let posicao = alvo.id.split("")   
                mudarcasa(posicao, valor)
                alvo.value = casas[i][j]
                if (verificarVitoria()) {
                    adicionar(`Parabéns, o jogador ${jogadorAtual} venceu. Reinicie para continuar`)
                };
                mudarjogador();
                p.textContent = `Vez de ${jogadorAtual}`;
            });
            div.appendChild(input);
        }
        br = document.createElement("br")
        div.appendChild(br)
    }
}

function jogarAleatorio() {
    if (jogadorAtual !== "O") {
        return
    }
    let deu = false;
    let linha;
    let coluna;

    do {
        linha = Math.floor(Math.random() * 3);
        coluna = Math.floor(Math.random() * 3);

        if (casas[linha][coluna] == "") {
            deu = true;
        }
    } while (!deu);
    mudarcasa([[linha],[coluna]], jogadorAtual);
    document.getElementById(`${linha}${coluna}`).value = jogadorAtual;
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
    if (jogadorAtual == 'X') {
        jogadorAtual = "O"
        return "O"
    } else if (jogadorAtual == "O") {
        jogadorAtual = "X"
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
            casas[i][0] == jogador && casas[i][1] == jogador && casas[i][2] == jogador) {
            return true;
        }
    }

    for (let i = 0; i < 3; i++) {
        if (casas[0][i] == jogador && casas[1][i] == jogador && casas[2][i] == jogador) {
            return true;
        }
    }

    if (casas[0][0] == jogador && casas[1][1] == jogador && casas[2][2] == jogador) {
        return true;
    }

    if (casas[0][2] == jogador && casas[1][1] == jogador && casas[2][0] == jogador) {
        return true;
    }

    return false;
}