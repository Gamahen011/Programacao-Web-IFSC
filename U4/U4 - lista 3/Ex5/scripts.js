var div = document.getElementById("resultados");

function atualizar() {

    if (div.firstChild !== null) {
        while (div.firstChild !== null) {
                div.removeChild(div.firstChild);
        }
    }

    let numeros = [23, 45, 67, 12, 89, 34];
    let maior = 0
    numeros.forEach(numero => {
        if (numero > maior) {
            maior = numero
        }        
    });

    adicionar(maior);
}

function adicionar(mensagem) {
    if (mensagem) {
        p = document.createElement('p');
        div.appendChild(p);
        p.textContent = mensagem;
    }
}

