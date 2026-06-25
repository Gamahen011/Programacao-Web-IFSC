function atualizar() {
    let div = document.getElementById("resultados");
    limpar(div);

    let linhas = parseInt(document.getElementById("linhas").value);
    let colunas = parseInt(document.getElementById("colunas").value);


};

function desenhar(linhas, colunas){
    let linha = "+"
    for (let i=0; i < colunas; i++) {
        linha += "-"
    }
}

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



