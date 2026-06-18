var div = document.getElementById("resultados");

function atualizar() {
    mensagem = ""

    if (div.firstChild !== null) {
        while (div.firstChild !== null) {
                div.removeChild(div.firstChild);
        }
    }

    lista = ["maçã", "banana", "laranja", "uva", "mamão"];

    lista.push('melão');
    lista.shift();

    lista.forEach((fruta, indice) => {
        switch (indice) {
            case 0:
                adicionar(fruta);
                break;
            case 4:
                adicionar(fruta);
                break;
        }
    });
}

function adicionar(mensagem) {
    if (mensagem) {
            p = document.createElement('p');
            div.appendChild(p);
            p.textContent = mensagem;
        }
}

