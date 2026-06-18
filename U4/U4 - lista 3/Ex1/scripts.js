var div = document.getElementById("resultados");

function atualizar() {
    mensagem = ""

    if (div.firstChild !== null) {
        while (div.firstChild !== null) {
                div.removeChild(div.firstChild);
        }
    }

    lista = ["maçã", "banana", "laranja", "uva", "mamão"];
    lista.forEach((fruta) => {
        adicionar(fruta);
    });
}

function adicionar(mensagem) {
    if (mensagem) {
            p = document.createElement('p');
            div.appendChild(p);
            p.textContent = mensagem;
        }
}

