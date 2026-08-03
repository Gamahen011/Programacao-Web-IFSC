function atualizar() {
    let div = document.getElementById("resultados");
    limpar(div);

    let linhas = parseInt(document.getElementById("linhas").value);
    let colunas = parseInt(document.getElementById("colunas").value);

    retangulo = desenhar(linhas, colunas);
    for (let i of retangulo) {
        adicionar(i, div)
    }
};

function desenhar(linha, coluna) {
    let desenho = [];
    for (i = 0; i < linha; i++) {
        linhastr = "|";
        for (j = 0; j < coluna; j++) {
            linhastr += "+|"
        }
        desenho.push(linhastr);
    }
    return desenho
};

function adicionar(mensagem, div) {
    if (mensagem) {
        let p = document.createElement("p");
        div.appendChild(p);
        p.textContent = mensagem;
    }
}

function limpar(div) {
    if (div.firstChild !== null) {
        while (div.firstChild !== null) {
                div.removeChild(div.firstChild);
        }
    }
}



