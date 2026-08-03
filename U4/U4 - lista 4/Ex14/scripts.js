function atualizar() {
    let div = document.getElementById("resultados");
    limpar(div);

    let nome = document.getElementById("nome").value;
    let lugar = document.getElementById("lugar").value;
    let objeto = document.getElementById("objeto").value;

    historia = gerarHistoriaEngracada(nome, lugar, objeto)
    adicionar(historia, div)
};

function gerarHistoriaEngracada(nome, lugar, objeto) {
  return `${nome} estava la no ${lugar} e caiu de cara na ${objeto}`
}

function adicionar(mensagem, div) {
    if (mensagem) {
        let p = document.createElement("p");
        div.appendChild(p);
        p.textContent = mensagem;
    }
};

function limpar(div) {
    if (div.firstChild !== null) {
        while (div.firstChild !== null) {
                div.removeChild(div.firstChild);
        }
    }
};



