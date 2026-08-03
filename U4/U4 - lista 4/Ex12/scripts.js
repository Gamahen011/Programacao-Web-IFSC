var jogadores = []

function atualizar() {
    let div = document.getElementById("resultados");
    limpar(div);

    let ganhador = sortearGanhador()
    adicionar(ganhador, div)
};

function registrar() {
    let nome = document.getElementById("nome").value
    jogadores.push(nome)
};

function sortearGanhador() {
  const sortear = Math.floor(Math.random() * jogadores.length);
  const ganhador = jogadores[sortear];
  return ganhador;
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



