var div = document.getElementById("resultados");

function atualizar() {
    let lista = [];

    if (div.firstChild !== null) {
        while (div.firstChild !== null) {
                div.removeChild(div.firstChild);
        }
    }

    for (let contador = 2; contador <= 20; contador += 2) {
        lista.push(contador)
    }

    lista.forEach(numero => {
        adicionar(numero)        
    });
}

function adicionar(mensagem) {
    if (mensagem) {
        p = document.createElement('p');
        div.appendChild(p);
        p.textContent = mensagem;
    }
}

